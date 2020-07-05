const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const helpers = require('./webpack.helpers');

module.exports = (env) => {
  const envKeys = helpers.getEnvKeys(env);

  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 3000
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
  })
}
