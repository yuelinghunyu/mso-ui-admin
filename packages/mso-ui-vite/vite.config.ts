import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { UserConfig } from "vitest";

export const config = {
  plugins: [vue(), vueJsx({})],
};

export default defineConfig(config as UserConfig);
