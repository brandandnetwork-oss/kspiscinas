/**
 * Validación accesible de formularios (mensajes en español, aria-invalid,
 * foco en el primer error). El servidor vuelve a validar todo: esto es solo
 * para ayudar a quien rellena el formulario.
 */

type Campo = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function mensaje(el: Campo): string {
  const v = el.validity;
  if (v.valueMissing) {
    if (el instanceof HTMLInputElement && el.type === 'checkbox') return 'Debes aceptar la política de privacidad para continuar.';
    if (el instanceof HTMLInputElement && el.type === 'radio') return 'Elige una opción.';
    return 'Este campo es obligatorio.';
  }
  if (v.typeMismatch && el.type === 'email') return 'Escribe un email válido, por ejemplo nombre@correo.com.';
  if (v.patternMismatch && el.type === 'tel') return 'Escribe un teléfono válido (9 dígitos, puede llevar prefijo).';
  if (v.tooShort) return `Escribe al menos ${(el as HTMLInputElement).minLength} caracteres.`;
  return el.validationMessage;
}

function errorNode(el: Campo): HTMLElement | null {
  const ids = (el.getAttribute('aria-describedby') ?? '').split(' ');
  const id = ids.find((i) => i.endsWith('-error'));
  if (id) return document.getElementById(id);
  // Grupos de radio: el error va asociado al fieldset.
  return el.closest('fieldset')?.querySelector<HTMLElement>('.field-error') ?? null;
}

function mostrar(el: Campo, ok: boolean) {
  const err = errorNode(el);
  el.setAttribute('aria-invalid', String(!ok));
  if (err) {
    err.textContent = ok ? '' : mensaje(el);
    err.classList.toggle('hidden', ok);
  }
}

/** Valida los campos dentro de `scope`. Devuelve true si todo es correcto. */
export function validar(scope: ParentNode): boolean {
  const campos = [...scope.querySelectorAll<Campo>('input, textarea, select')].filter(
    (el) => el.name && el.name !== 'web' && el.type !== 'hidden',
  );
  let primero: Campo | null = null;
  const radiosVistos = new Set<string>();
  for (const el of campos) {
    if (el instanceof HTMLInputElement && el.type === 'radio') {
      if (radiosVistos.has(el.name)) continue;
      radiosVistos.add(el.name);
    }
    const ok = el.checkValidity();
    mostrar(el, ok);
    if (!ok && !primero) primero = el;
  }
  primero?.focus();
  return !primero;
}

/** Prepara un formulario: marca de tiempo antispam y validación al enviar. */
export function prepararFormulario(form: HTMLFormElement) {
  form.noValidate = true;
  const ts = form.querySelector<HTMLInputElement>('[data-ts]');
  if (ts) ts.value = String(Math.floor(Date.now() / 1000));

  form.addEventListener('submit', (e) => {
    if (!validar(form)) {
      e.preventDefault();
      return;
    }
    const boton = form.querySelector<HTMLButtonElement>('button[type=submit]');
    if (boton) {
      boton.disabled = true;
      boton.textContent = 'Enviando…';
    }
  });

  // Revalidar al corregir un campo con error.
  form.addEventListener('input', (e) => {
    const el = e.target as Campo;
    if (el.getAttribute('aria-invalid') === 'true') mostrar(el, el.checkValidity());
  });
  form.addEventListener('change', (e) => {
    const el = e.target as Campo;
    if (el.getAttribute('aria-invalid') === 'true') mostrar(el, el.checkValidity());
  });
}

/** Muestra el aviso de error si el servidor devolvió ?error=… */
export function avisoErrorServidor(alerta: HTMLElement | null) {
  const error = new URLSearchParams(location.search).get('error');
  if (!alerta || !error) return;
  const textos: Record<string, string> = {
    validacion: 'Revisa los campos obligatorios e inténtalo de nuevo.',
    envio: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o llámanos por teléfono.',
    limite: 'Has enviado varias solicitudes seguidas. Espera unos minutos o llámanos por teléfono.',
  };
  alerta.textContent = textos[error] ?? textos.envio!;
  alerta.classList.remove('hidden');
}
