import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import { timeout } from './vitest.config.e2e';

export default defineConfig({
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './playground/test-utils'),
    },
  },
  test: {
    include: ['./playground/**/*.spec.[tj]s'],
    setupFiles: ['./playground/vitestSetup.ts'],
    globalSetup: ['./playground/vitestGlobalSetup.ts'],
    testTimeout: timeout,
    hookTimeout: timeout,
    reporters: 'dot',
      deps: {
      // Prevent Vitest from running the workspace packages in Vite's SSR runtime
      moduleDirectories: ['node_modules', 'packages'],
    },
  },
  esbuild: {  
    target: 'node20',
  },    
  publicDir: false,
});   
// This configuration is for Vitest, a testing framework for Vite projects.                                                                                                                                                                                                                                                                 