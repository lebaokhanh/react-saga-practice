const path = require('path');

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'public'),
    publicPath: "/"
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
  }
}
