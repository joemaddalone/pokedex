const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
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
          use: ['babel-loader', 'eslint-loader'],
        },

        {
          oneOf: [
            {
			  test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'assets/images/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
              loader: require.resolve('file-loader'),
              options: {
                esModule: false,
                name: 'assets/fonts/[name].[hash:8].[ext]',
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
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            // This loader doesn't use a "test" so it will catch all modules
            // that fall through the other loaders.
            {
              loader: require.resolve('file-loader'),
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise be processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                esModule: false,
                name: 'assets/[name].[hash:8].[ext]',
              },
            },
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
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
};
