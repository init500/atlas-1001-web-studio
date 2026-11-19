import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://init500.github.io',
  base: '/atlas-1001-web-studio/',
  trailingSlash: 'always',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
