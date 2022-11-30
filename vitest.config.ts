/// <reference types="vitest" />
import * as path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    include: ["packages/*/build/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  },
  resolve: {
    alias: {
      "@org/pnpm-ts-monorepo": path.resolve(__dirname, "packages/pnpm-ts-monorepo")
    }
  }
})
