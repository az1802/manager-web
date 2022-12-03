import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import ViteComponents from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import PkgConfig from "vite-plugin-package-config";
import OptimizationPersist from "vite-plugin-optimize-persist";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    PkgConfig(),
    OptimizationPersist(),
    vue(),
    vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true,
      },
      imports: [
        //第三方模块
        "vue",
        "vue-router",
        "pinia",
        {
          axios: [["default", "axios"]], //自定义导出模块名称
        },
      ],
      dts: true, //自动生成dts文件
      dirs: ["./src/hooks/**", "./src/utils/**"], //自动的导入模块
      include: [
        //自动转换的文件处理
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
    }),
    ViteComponents({
      dirs: ["src/components"],
      deep: true,
      dts: true,
      directives: true,
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@utils": "./src/utils",
    },
  },
  build: {},
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5002",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
