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
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
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
        sourceMap: isProduction,
      },
    },
  ].filter(Boolean);
  return loaders;
};
