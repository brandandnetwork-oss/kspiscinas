// Genera los iconos PNG a partir de public/favicon.svg. Uso: node scripts/generate-icons.mjs
import sharp from 'sharp';

const svg = 'public/favicon.svg';
await sharp(svg, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(svg, { density: 600 }).resize(180, 180).flatten({ background: '#1f2b78' }).png().toFile('public/apple-touch-icon.png');
console.log('Iconos generados');
