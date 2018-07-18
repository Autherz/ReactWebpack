var path = require('path')
module.exports = {
  entry: path.resolve('./src/index.js'), // Absolute path
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'), // Absolute path
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match *.js
        exclude: /node_modules/, // Dont transpile files in node_modules
        loader: 'babel-loader', // Use babel-loader to transpile
      },
    ]
  },
}