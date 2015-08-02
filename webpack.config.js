var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var clientPath = path.join(__dirname, 'client');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['react-hot', 'babel']},
      {test: /\.scss$/, include: clientPath, loaders: ['style', 'css', 'sass', 'sourceMap']},
    ],
  },
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/auth-demo/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Redux Auth Demo',
      template: './client/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['', '.js',],
  },
};
