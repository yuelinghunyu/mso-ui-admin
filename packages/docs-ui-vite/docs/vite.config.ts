import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx() as Plugin,
  ],
});
