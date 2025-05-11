const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    env: {
      snapshotOnly: false,
      type: 'base' // or 'actual' for comparison
    }
  }
});
