import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup-tests.ts"],
    coverage: {
      exclude: [
        "src/services/**",
        "src/providers/**",
        "src/resources/**",
        "src/test/**",
      ],
    },
  },
});

// Mesclando as configurações do Vite e Vitest
export default mergeConfig(viteConfig, vitestConfig);
