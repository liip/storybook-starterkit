import { create } from '@storybook/theming';

/**
 * Storybook Interface Theme
 * Note: Sidebar icons are currently not impacted by the blow theme options. You
 * can style them via `manager-head.html`.
 */

export default create({
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: '#6EA644',
  colorSecondary: '#6EA644',

  // UI
  appBg: '#F9F9F9',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Fonts
  fontBase: `
    -apple-system,
    BlinkMacSystemFont,
    "avenir next", avenir,
    "helvetica neue", helvetica,
    ubuntu,
    roboto, noto,
    "segoe ui", arial,
    sans-serif
  `,
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#6EA644',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  brandTitle: 'Liip Web Styleguide',
  brandUrl: 'https://styleguide.liip.com',
  brandImage: require('./assets/logo.svg'),
});
