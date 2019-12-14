const path = require('path');

module.exports = {
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@sb': path.resolve(__dirname, '../.storybook'),
  },
};
