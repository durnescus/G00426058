import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'ion-app_8.entry.js',
      'ion-button_2.entry.js',
      'ion-item_8.entry.js',
      'ion-input.entry.js',
    ],
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
          if (
          warning.message?.includes('dynamic import cannot be analyzed') ||
          warning.message?.includes('file does not exist at') ||
          warning.message?.includes('Try adding it to `optimizeDeps.exclude`')
        ) {
          return;
        }
       
        warn(warning);
      },
    },
  },
});
