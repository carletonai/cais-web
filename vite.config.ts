import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/carletonai.github.io/",
  css: {
    postcss: "./postcss.config.cjs",
  },
});
