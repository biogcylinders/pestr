import { defineConfig } from "vitest/config";

// This test config forces a minimal Vite setup for Vitest runs so heavy runtime
// plugins (like the TanStack start plugin) don't execute during unit tests.
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
  // Provide a minimal Vite surface: no extra plugins to avoid runtime errors.
  plugins: [],
});
