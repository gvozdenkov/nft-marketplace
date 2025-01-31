import { defineConfig } from 'vite';
import { resolve } from 'path';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/nft-marketplace',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  plugins: [htmlPurge()],
});
