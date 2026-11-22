import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.vcmfitossanitario.com.br', // ponytail: trocar pelo domínio real
  vite: { plugins: [tailwindcss()] },
});
