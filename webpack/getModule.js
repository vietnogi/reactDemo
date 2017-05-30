import ExtractTextPlugin from 'extract-text-webpack-plugin'

const getModule = ({ path, dirname, istanbul }) => {
  const scssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?sourceMap!sass-loader?sourceMap',
  })

  const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader',
  })

  const rules = [{
    test: /\.jsx?$/,
    loader: 'babel-loader',
    include: path.join(dirname, '..'),
    exclude: /node_modules/,
    query: {
      presets: [ 'es2015', 'react', 'stage-0' ],
      plugins: ['jsx-control-statements'],
      babelrc: false,
    },
  }, {
    test: /\.json$/,
    loader: 'json',
  }, {
    test: /\.scss$/,
    loader: scssLoader,
  }, {
    test: /\.css$/,
    loader: cssLoader,
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
