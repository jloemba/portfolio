// @ts-check
import { defineConfig } from "astro/config";
//import github from 'astrojs/github-pages';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jloemba.github.io',
  base: '/',
  //integrations: [github()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

