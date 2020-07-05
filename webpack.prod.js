const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const helpers = require('./webpack.helpers.js')
const webpack = require('webpack');

module.exports = (env) => {
  const envKeys = helpers.getEnvKeys(env);

  return merge(common, {
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
  })
}
