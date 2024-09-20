import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "micro-frontend-remote",
      filename: "microFrontendRemoteEntry.js",
      exposes: {
        "./src/features/feature-one":
          "./src/features/feature-one/FeatureOne.tsx",
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
    minify: false,
    cssCodeSplit: false,
  },
});
