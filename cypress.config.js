const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Your existing node event listeners or customizations can go here
    },
    specPattern: [
      //"cypress/e2e/specs/*.js",
      "cypress/e2e/specs/*.feature"
    ],
    baseUrl: "https://www.saucedemo.com/",
    experimentalSessionAndOrigin: true,
    testIsolation: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
