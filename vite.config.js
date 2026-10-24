import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite ignores package.json browserslist; es2020 keeps roughly the old CRA ">0.2%, not dead" reach.
  build: { outDir: 'build', target: 'es2020' },
  server: { port: 3000 },
  test: { environment: 'jsdom', globals: true, setupFiles: './src/setupTests.js' },
});
