const getModule = ({ path, dirname, istanbul }) => {
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
  }, {
    test: /\.json$/,
    loader: 'json',
  }, {
    test: /\.scss$/,
    use: [ 'style-loader', 'css-loader', 'sass-loader' ],
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
