const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "AppRemote": "http://localhost:4300/remoteEntry.js",    
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' }, 
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' }, 
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^14.2.0' },

    "shared": { singleton: true, strictVersion: true, requiredVersion: '<1.0.0' },
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }), //normalmente usate solo questo
  },

});
