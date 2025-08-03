const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const getStyleLoaders = require('./util/getStyleLoaders');
const appSrc = path.resolve(__dirname, '../src');

module.exports = (isProduction) => {
  return {
    entry: {
      app: './src/index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: appSrc,
          use: ['babel-loader'],
        },

        {
          oneOf: [
            {
              test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
              type: 'asset',
              parser: {
                dataUrlCondition: {
                  maxSize: 10000,
                },
              },
              generator: {
                filename: 'assets/[name].[hash:8][ext]',
              },
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
              type: 'asset/resource',
              generator: {
                filename: 'assets/[name].[hash:8][ext]',
              },
            },
            {
              test: /\.css$/,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  sourceMap: true,
                },
                isProduction,
              ),
              sideEffects: true,
            },
            {
              type: 'asset/resource',
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              generator: {
                filename: 'assets/[name].[hash:8][ext]',
              },
            },
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        'poke-api': path.resolve(__dirname, '../src/api'),
        'poke-store': path.resolve(__dirname, '../src/store'),
        'poke-i18n': path.resolve(__dirname, '../src/i18n/i18n.js'),
      },
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new ESLintPlugin({
        context: appSrc,
        extensions: ['js', 'jsx'],
        emitWarning: true,
        emitError: false,
      }),
    ],
  };
};
