const webpack = require('webpack');

const getWebpackPlugins = function(env) {
  let plugins = [];
  plugins.push(
    new webpack.ProvidePlugin({
      $:  'jquery',
      ko: 'knockout'
    })
  );
}