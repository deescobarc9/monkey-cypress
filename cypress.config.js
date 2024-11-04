const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'xrcn1y',
  video: true,
  e2e: {
    video: true,
    baseUrl:"http://localhost:2368/ghost/#/posts/",
    env:{
      appName:"Ghost",
      events: 50,
      delay:300,
      seed:34,
      pctClicks:19,
      pctScroll:17,
      pctSelectors:16,
      pctKeys:16,
      pctSpKeys:16,
      pctPgNav:16
    },
    pageLoadTimeout:120000,
    defaultCommandTimeout:120000,
    videosFolder:"./results",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
