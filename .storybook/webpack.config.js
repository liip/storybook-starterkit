const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = async ({ config, mode }) => {
  /**
   * Optimizations
   */
  config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

  /**
   * Entries
   */
  config.entry.push('./src/assets/js/styleguide.js');

  /**
   * Resolve
   */
  config.resolve.modules.push(path.resolve(__dirname, '../src/assets'));
  config.resolve.modules.push(path.resolve(__dirname, '../src/assets/js'));
  config.resolve.modules.push('node_modules');
  config.resolve.alias['@'] = path.resolve(
    __dirname,
    '../src/'
  );

  /**
   * Rules
   */
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twigjs-loader',
      },
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: mode === 'DEVELOPMENT',
        }
      },
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')(),
          ],
        },
      },
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.svg$/,
    include: path.resolve('./src/assets/icons'),
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'assets/icons.svg',
          esModule: false,
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            {
              removeUnknownsAndDefaults: {
                // Do not remove fill="#000" to prevent CSS from taking over
                // If it’s explicitly set, it means it should stay
                defaultAttrs: false,
              },
            },
          ],
        },
      },
    ],
  });

  /**
   * Plugins
   */
  config.plugins.push(new MiniCssExtractPlugin());
  config.plugins.push(new SpriteLoaderPlugin());

  return config;
};
