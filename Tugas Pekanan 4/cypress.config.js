const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000, // Timeout untuk perintah default
  pageLoadTimeout: 60000, // Timeout untuk pemuatan halaman
  
});
