import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";

// This test config forces a minimal Vite setup for Vitest runs so heavy runtime
// plugins (like the TanStack start plugin) don't execute during unit tests.
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Provide a minimal Vite surface: no extra plugins to avoid runtime errors.
  plugins: [],
});
