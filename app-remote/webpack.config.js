const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'app-remote',

  exposes: {
    './AppRemote': './src/app/rubrica/rubrica.module.ts',
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' }, 
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' }, 
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' },

    // "shared": { singleton: true, strictVersion: true, requiredVersion: '<1.0.0' },
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
