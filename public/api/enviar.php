<?php
/**
 * Recepción de formularios (contacto y presupuesto) — KS Piscinas.
 *
 * - Valida de nuevo todos los datos en el servidor.
 * - Antispam sin CAPTCHA: campo trampa ("web"), tiempo mínimo de relleno y
 *   límite de envíos por IP.
 * - Envía el aviso por email y redirige a /gracias/ (patrón POST-redirect-GET).
 *
 * Configuración: copia api/config.example.php a api/config.php en el servidor
 * (config.php no se versiona) y ajusta destinatario y remitente.
 */

declare(strict_types=1);

$config = [
    'to' => 'info@kspiscinas.es',
    // Remitente del propio dominio (mejor entregabilidad): crea el buzón en Hostinger.
    'from' => 'web@kspiscinas.es',
    'from_name' => 'Web KS Piscinas',
    'min_seconds' => 3,       // menos tiempo que esto = bot
    'max_per_hour' => 5,      // envíos por IP y hora
];
if (is_file(__DIR__ . '/config.php')) {
    $config = array_merge($config, (array) require __DIR__ . '/config.php');
}

function volver(string $tipo, string $error): never
{
    $destino = $tipo === 'presupuesto' ? '/presupuesto/' : '/contacto/';
    header('Location: ' . $destino . '?error=' . rawurlencode($error), true, 303);
    exit;
}

function limpiar(mixed $v, int $max = 500): string
{
    $v = is_string($v) ? $v : '';
    $v = trim(str_replace(["\r", "\0"], '', $v));
    return mb_substr($v, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST', true, 405);
    exit;
}

$tipo = limpiar($_POST['tipo_formulario'] ?? '', 20) === 'presupuesto' ? 'presupuesto' : 'contacto';

// 1. Campo trampa: si viene relleno, fingimos éxito para no dar pistas al bot.
if (limpiar($_POST['web'] ?? '') !== '') {
    header('Location: /gracias/', true, 303);
    exit;
}

// 2. Tiempo mínimo de relleno.
$ts = (int) ($_POST['ts'] ?? 0);
if ($ts > 0 && (time() - $ts) < $config['min_seconds']) {
    header('Location: /gracias/', true, 303);
    exit;
}

// 3. Límite de envíos por IP (fichero temporal, sin base de datos).
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$registro = sys_get_temp_dir() . '/ks_form_' . hash('sha256', $ip);
$marcas = is_file($registro) ? array_filter(
    array_map('intval', explode(',', (string) file_get_contents($registro))),
    fn(int $t) => $t > time() - 3600
) : [];
if (count($marcas) >= $config['max_per_hour']) {
    volver($tipo, 'limite');
}

// 4. Validación.
$nombre = limpiar($_POST['nombre'] ?? '', 100);
$telefono = limpiar($_POST['telefono'] ?? '', 30);
$email = limpiar($_POST['email'] ?? '', 150);
$mensaje = limpiar($_POST['mensaje'] ?? '', 3000);
$privacidad = ($_POST['privacidad'] ?? '') === 'si';

$telefonoValido = preg_match('/^(\+?34)?[\s.-]?[6789](?:[\s.-]?\d){8}$/', $telefono) === 1;
if (
    mb_strlen($nombre) < 2
    || !$telefonoValido
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || !$privacidad
    || ($tipo === 'contacto' && mb_strlen($mensaje) < 10)
) {
    volver($tipo, 'validacion');
}

// 5. Composición del email.
$lineas = [
    'Nombre' => $nombre,
    'Teléfono' => $telefono,
    'Email' => $email,
];
if ($tipo === 'presupuesto') {
    $extras = array_map(fn($x) => limpiar($x, 60), (array) ($_POST['extras'] ?? []));
    $lineas += [
        'Proyecto' => limpiar($_POST['proyecto'] ?? '', 60),
        'Forma' => limpiar($_POST['forma'] ?? '', 80),
        'Tamaño' => limpiar($_POST['medidas'] ?? '', 80),
        'Revestimiento' => limpiar($_POST['revestimiento'] ?? '', 40),
        'Extras' => implode(', ', array_filter($extras)),
        'Localidad' => limpiar($_POST['zona'] ?? '', 100),
        'Plazo' => limpiar($_POST['plazo'] ?? '', 60),
    ];
}
$lineas['Mensaje'] = $mensaje;
$lineas['Consentimiento privacidad'] = 'Sí, ' . date('d/m/Y H:i');

$cuerpo = '';
foreach ($lineas as $k => $v) {
    $cuerpo .= $k . ': ' . ($v !== '' ? $v : '—') . "\n";
}

$asunto = $tipo === 'presupuesto'
    ? 'Nueva solicitud de presupuesto: ' . $nombre
    : 'Nuevo mensaje de contacto: ' . $nombre;

$cabeceras = [
    'From' => sprintf('%s <%s>', $config['from_name'], $config['from']),
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'KS Piscinas web',
];

$ok = mail(
    $config['to'],
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $cuerpo,
    $cabeceras,
    '-f' . $config['from']
);

if (!$ok) {
    volver($tipo, 'envio');
}

$marcas[] = time();
@file_put_contents($registro, implode(',', $marcas), LOCK_EX);

header('Location: /gracias/', true, 303);
exit;
