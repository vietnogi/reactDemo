import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import forEach from 'lodash/forEach'

const getPlugins = ({ htmlWebpackPlugins = [] }) => {
  let plugins = []

  const extractTextPlugin = new ExtractTextPlugin('[name].[hash].css')

  const commonChunk = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'name].[hash].js',
  })

  plugins.push(commonChunk)

  plugins.push(extractTextPlugin)

  forEach(htmlWebpackPlugins, (htmlWebpackPlugin) => {
    plugins.push(new HtmlWebpackPlugin(htmlWebpackPlugin))
  })

  return plugins
}

export default getPlugins
