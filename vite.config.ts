import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "micro-frontend-remote",
      filename: "microFrontendRemoteEntry.js",
      exposes: {
        "./FeatureOne": "./src/features/feature-one/FeatureOne.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  envDir: "./src/environments",
  build: {
    modulePreload: false,
    target: "esnext",
  },
});
