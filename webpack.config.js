require('babel-register')

var configs = require('./webpack.config.babel.js')

module.exports = {
  context: configs.default.context,
  entry: configs.default.entry,
  output: configs.default.output,
  devtool: configs.default.devtool,
  module: {
    rules: configs.default.module.rules,
  },
  resolveLoader: configs.default.resolveLoader,
  resolve: configs.default.resolve,
  plugins: configs.default.plugins,
  devServer: configs.default.devServer,
}
