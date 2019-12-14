import { create } from '@storybook/theming';

/**
 * Storybook Interface Theme
 * Note: Sidebar icons are currently not impacted by the blow theme options. You
 * can style them via `manager-head.html`.
 */

export default create({
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: 'rgb(30, 167, 253)',
  colorSecondary: 'rgb(30, 167, 253)',

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
  barSelectedColor: 'rgb(30, 167, 253)',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  brandTitle: 'Storybook',
  brandImage: require('./logo.svg'),
});
