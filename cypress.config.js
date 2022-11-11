const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'http://skleptest.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080
})