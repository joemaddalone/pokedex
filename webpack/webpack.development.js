const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const publicPath = '/';

module.exports = () => {
  const port = 9999;
  return merge(common(false), {
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
      path: path.join(__dirname, publicPath),
      publicPath,
      filename: '[name].js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, publicPath),
        publicPath,
      },
      hot: true,
      historyApiFallback: {
        disableDotRule: true,
        index: `${publicPath}index.html`,
      },
      port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: path.resolve(__dirname, `.${publicPath}index.html`),
      }),
    ],
  });
};
