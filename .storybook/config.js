import { addParameters, addDecorator, configure } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import parameters from './parameters';

/**
 * Styleguide Stylesheets
 */
import '../assets/scss/styleguide.scss';

/**
 * Styleguide Scripts
 */
import '../assets/js/styleguide.js';

/**
 * Parameters
 */
addParameters(parameters);

/**
 * Decorators
 */
addDecorator(withA11y);

/**
 * Loading stories and docs
 * Note: Adding `.stories` to `.mdx` files is mandatory for the moment since
 * `addon-docs` falsely require it.
 */
configure([
  require.context('../docs', true, /\.stories\.mdx$/),
  require.context('../src', true, /\.stories\.(js|mdx)$/),
], module);
