import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkFacts from './src/lib/remark-facts';
import rehypeTableLabels from './src/lib/rehype-table-labels';
import rehypeExternalLinks from './src/lib/rehype-external-links';

export default defineConfig({
  site: 'https://sdfltd.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkFacts], rehypePlugins: [rehypeTableLabels, rehypeExternalLinks], smartypants: true }),
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
      assetsInlineLimit: 4096,
    },
  },
});
