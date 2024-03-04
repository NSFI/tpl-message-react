import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import babel from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["umd"],
      name: "YsfCustomComponent",
      fileName: "ysf",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        generatedCode: "es5",
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        babel({
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          babelHelpers: 'bundled',
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: 3,
                targets: {
                  chrome: "49",
                },
              },
            ],
          ],
        }),
      ],
    },
    cssCodeSplit: false,
    minify: true,
  },
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [react(), cssInjectedByJsPlugin()],
});
