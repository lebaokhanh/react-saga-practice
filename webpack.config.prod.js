const webpack = require('webpack');
const path = require('path');

// module.exports = (env) => {
//   // create a nice object from the env variable
//   const envKeys = Object.keys(env).reduce((prev, current) => {
//     prev[`process.env.${current}`] = JSON.stringify(env[current]);
//     return prev;
//   }, {});
//
//   return {
//     mode: "development",
//     entry: "./src/index.js",
//     resolve: {
//       extensions: ['.js', '.jsx']
//     },
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, 'public')
//     },
//     module: {
//       rules: [
//         {
//           test: /\.svg$/,
//           loader: 'svg-inline-loader'
//         },
//         {
//           test: /\.css$/i,
//           loader: ['style-loader', 'css-loader']
//         }
//       ]
//     },
//     plugins: [
//       new webpack.DefinePlugin(envKeys)
//     ],
//   }
// }

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'public')
  },
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
    contentBase: path.join(__dirname, 'public')
  }
}
