import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  test: {
    coverage: {
      enabled: true,
      reportsDirectory: "coverage",
      all: true,
      reporter: ["text"],
      exclude: [
        "**/*.spec.*",
        "**/*.types.ts",
        "**.config.*",
        "src/environments",
        "dist",
        "public",
      ],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
});
