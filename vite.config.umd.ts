import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ['umd'],
      name: "YsfCustomComponent",
      fileName: 'ysf',
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: 'umd',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [react(), cssInjectedByJsPlugin()],
});
