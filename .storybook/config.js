import { addParameters, addDecorator, configure } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import Twig from 'twig';

import parameters from './parameters';

import '@/assets/js/styleguide.js';

Twig.cache();

// Make `.twig` templates available at runtime for dynamic includes.
const context = require.context('../src/components', true, /\.twig$/);
context.keys().forEach(key => {
  const template = context(key);

  // Flatten template names so they can be easily included
  // For example 'src/components/button/button.twig' becomes 'button.twig'
  const parts = key.split('/');
  const id = parts[parts.length - 1];

  Twig.twig({
    id,
    data: template.tokens,
    allowInlineIncludes: true,
    rethrow: true,
  });
});

addParameters(parameters);
addDecorator(withA11y);

// Loading stories
configure([require.context('../src', true, /\.stories\.(js|mdx)$/)], module);
