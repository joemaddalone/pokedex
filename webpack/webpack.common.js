const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                require('postcss-import')({
                  root: loader.resourcePath,
                }),
                require('postcss-preset-env')({
                  stage: 0,
                  nesting: true,
                }),
                require('autoprefixer')(),
                require('cssnano')({
                  autoprefixer: false,
                }),
                require('postcss-flexbugs-fixes')(),
              ],
            },
          },
        ],
      },
      {
        parser: {
          amd: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'poke-api': path.resolve(__dirname, '../src/api'),
      'poke-store': path.resolve(__dirname, '../src/store'),
    },
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
