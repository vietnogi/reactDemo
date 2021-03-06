import ExtractTextPlugin from 'extract-text-webpack-plugin'

const getModule = ({ path, dirname, istanbul }) => {
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  }

  const rules = [{
    test: /\.js$/,
    loader: 'babel-loader',
    include: path.join(dirname, '..'),
    exclude: /node_modules/,
    query: {
      presets: [ 'es2015', 'react', 'stage-0' ],
      plugins: ['jsx-control-statements'],
      babelrc: false,
    },
  }, { /* hack to use es5 source map */
    test: /\.js$/,
    loader: 'transform-loader/cacheable?envify',
    enforce: 'post',
  }, {
    test: /\.json$/,
    loader: 'json',
  }, {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [cssLoader, sassLoader],
    }),
  }, {
    test: /\.(png|jpg|jpeg|gif)$/,
    loader: 'file-loader',
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  }]

  return { rules }
}

export default getModule
