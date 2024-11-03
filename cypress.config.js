const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'xrcn1y',
  e2e: {
    // projectId: "Monkey-Ghost",
    baseUrl:"http://localhost:2368/ghost",
    env:{
      appName:"Ghost",
      events:5000,
      delay:300,
      seed:1234,
      pctClicks:19,
      pctScroll:17,
      pctSelectors:16,
      pctKeys:16,
      pctSpKeys:16,
      pctPgNav:16
    },
    // specPattern: "./cypress/e2e/monkey",
    pageLoadTimeout:120000,
    defaultCommandTimeout:120000,
    // testFiles: "monkey.js",
    videosFolder:"./results",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
