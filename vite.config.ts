import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import ViteComponents from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: ["vue", "vue-router", "pinia"],
      dts: true,
      include: [
        // /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        // /\.vue$/,
        // /\.vue\?vue/, // .vue
        // /\.md$/, // .md
      ],
    }),
    ViteComponents({
      dts: true,
      resolvers: [],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
