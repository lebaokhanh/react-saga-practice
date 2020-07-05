const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = (env) => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const rootPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const baseEnvPath = `${rootPath}/.env`;

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = `${baseEnvPath}.${env.ENVIRONMENT}`;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : baseEnvPath;

  // cal dotenv and it will return an Object with a parsed key
  const envFile = dotenv.config({ path: finalPath }).parsed;

  // create a nice object from the env variable
  const envKeys = Object.keys(envFile).reduce((envHash, key) => {
    envHash[`process.env.${key}`] = JSON.stringify(envFile[key]);
    return envHash;
  }, {});

  return {
    // mode: "development",
      entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, 'public'),
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: 'svg-url-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 3000
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
  }
}
