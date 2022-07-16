import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 412,
  viewportHeight: 783,
  env: {
    'cypress-plugin-snapshots': {
      autoCleanUp: true,
      imageConfig: {
        threshold: 0.01,
      },
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/siam-parking-fee',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
})
