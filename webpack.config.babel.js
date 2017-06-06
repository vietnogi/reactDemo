import pkg from './package'
import path from 'path'
import getModule from './webpack/getModule'
import getPlugins from './webpack/getPlugins'

const dirname = __dirname
const template = './index.html'

const entry = {
  app: ['babel-polyfill', './index.js'],
  vendor: Object.keys(pkg.dependencies),
}

const htmlWebpackPlugins = [{
  template,
  inject: 'body',
}]

const context = dirname
const publicPath = '/'

const output = {
  path: path.join(dirname, '/dist' + publicPath),
  publicPath,
  filename: '[name].[hash].js',
  chunkFilename: '[name].[hash].js',
}

const devtool = 'cheap-module-eval-source-map'
const module = getModule({ path, dirname })
const utilitiesPath = path.join(dirname, '/utilities')
const componentsPath = path.join(dirname, '/components')

const alias = {
  utilities: utilitiesPath,
  components: componentsPath,
}

const extensions = [
  '.js',
  '.json',
  '.scss',
  '.svg',
  '.png',
  '.gif',
  '.jpg',
]

const resolve = {
  modules: [
    path.join(dirname, '/node_modules/'),
    'node_modules',
  ],
  alias,
  extensions,
}

const plugins = getPlugins({ htmlWebpackPlugins })

const devServer = {
  historyApiFallback: true,
  clientLogLevel: 'error',
  hot: true, // enable HMR on the server
}

const configs = {
  context,
  entry,
  output,
  devtool,
  module,
  resolve,
  plugins,
  devServer,
}

export default configs
