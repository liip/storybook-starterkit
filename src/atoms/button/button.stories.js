import { storiesOf } from '@storybook/html';

import button from './button.twig';

storiesOf('Atoms|Button', module)
  .add('Default', () => {
    return button({ id: 'default', title: 'default' });
  })
  .add('Primary', () => {
    return button({ id: 'primary', title: 'primary' });
  });
