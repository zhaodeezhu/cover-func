const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'cover.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}