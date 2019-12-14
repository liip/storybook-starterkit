const path = require('path');

module.exports = [
  {
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
      },
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules\/(?!dom7|swiper)/,
    loader: 'babel-loader',
  },
  {
    test: /\.js$/,
    include: /node_modules\/twig/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { modules: 'commonjs' }]],
        },
      },
    ],
  },
  {
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
                defaultAttrs: false,
              },
            },
          ],
        },
      },
    ],
  },
];
