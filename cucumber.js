module.exports = {
  default: {
    require: ['features/step-definitions/**/*.ts','features/support/hooks.ts',
      'features/support/world.ts'], // path to your step files
    requireModule: ['ts-node/register'],   // support TypeScript
    format: ['progress'],                  // output format
    paths: ['features/**/*.feature'],      // feature files
    publishQuiet: true,                     // suppress Cucumber.io publishing banner
    timeout: 60000,                     // default timeout for step definitions 
  }
};