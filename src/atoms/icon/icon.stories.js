import { storiesOf } from '@storybook/html';

import template from './icon.twig';

storiesOf('Atoms|Icon', module)
  .add('Default', () => {
    const ctx = {
      id: 'international',
      title: 'An example icon'
    };

    return template(ctx);
  });
