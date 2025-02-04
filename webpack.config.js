const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "mfeUser",
  filename: "remoteEntry.js",
  exposes: {
    './UserModule': '../mfe-user/src/app/app.module.ts',
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});
