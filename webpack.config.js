/**
 * This is our own Webpack config, used only to bundle the library for
 * production, independently of Storybook.
 * For the webpack config used by Storybook see .storybook/webpack.config.js
 * Here we add loaders we're missing from Storybook built-in webpack and optimize the output.
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { entry, output, resolve, loaders, plugins } = require('./.webpack');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry,
  resolve,
  output: {
    ...output,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      ...loaders,
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.woff2?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ],
  },
  plugins: [
    ...plugins,
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!VERSION'],
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'styleguide-vendors',
          chunks: 'all',
        },
      },
    },
  },
};
