const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = () => {
  return merge(common(true), {
    devtool: 'source-map',
    mode: 'production',
    output: {
      // The build folder.
      path: path.resolve(__dirname, '../build'),
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: false,
      // There will be one main bundle, and one file per asynchronous chunk.
      // In development, it does not produce real files.
      filename: 'js/[name].[contenthash:8].js',
      // TODO: remove this when upgrading to webpack 5
      futureEmitAssets: true,
      // There are also additional JS chunk files if you use code splitting.
      chunkFilename: 'js/[name].[contenthash:8].chunk.js',
      // We inferred the "public path" (such as / or /my-project) from homepage.
      // We use "/" in development.
      publicPath: '/',
      // Point sourcemap entries to original disk location (format as URL on Windows)
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: true,
        }),
      ],
    },
    stats: {
      errors: true,
      errorDetails: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
    ],
  });
};
