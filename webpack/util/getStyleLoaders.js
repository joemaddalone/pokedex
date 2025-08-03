const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (cssOptions, isProduction) => {
  const loaders = [
    !isProduction && require.resolve('style-loader'),
    isProduction && {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../../' },
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          plugins: [
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
        sourceMap: isProduction,
      },
    },
  ].filter(Boolean);
  return loaders;
};
