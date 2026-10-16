import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Domínio final do site. Usado pelo BaseLayout para gerar as URLs canônicas.
  // Atualize este valor quando o domínio definitivo for configurado no deploy.
  site: 'https://vfcconstruction.co.uk',
  prefetch: {
    prefetchAll: true,
  },
});