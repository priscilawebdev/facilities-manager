const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (__, args) => ({
  entry: './client/src/index',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy: {
      '/api/**': 'http://localhost:3000'
    }
  },
  devtool: args.mode === 'development' ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader' },
          { loader: 'baggage-loader?index.sass' }
        ]
      },
      {
        test: /\.sass?$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: 'client/src/utils/styles/index.sass',
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/public/index.html',
      favicon: './client/public/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.mp3'],
    alias: {
      components: path.resolve(__dirname, 'client/src/components'),
      containers: path.resolve(__dirname, 'client/src/containers'),
      utils: path.resolve(__dirname, 'client/src/utils'),
      ducks: path.resolve(__dirname, 'client/src/ducks')
    }
  }
})
