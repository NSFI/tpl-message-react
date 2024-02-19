import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      open: `?k=${env.APPKEY}&templateId=${env.templateId}`,
      proxy: {
        "/client":
          env.MODE === "test"
            ? "https://qytest.netease.com"
            : "https://qiyukf.com",
      },
    },
  };
});
