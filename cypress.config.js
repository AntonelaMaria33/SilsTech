const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://silsshop.sils.tech',
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      // Implementar los listeners de eventos si es necesario
    },
  },
});
