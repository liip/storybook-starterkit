import { STORIES_CONFIGURED } from '@storybook/core-events'
import { addons } from '@storybook/addons';

import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';

/**
 * Homepage
 * The default story to be loaded if there's none specified within the url
 * paramters.
 */
addons.register('@liip/defaultStory', api => {
  api.on(STORIES_CONFIGURED, (kind, story) => {
    if (api.getUrlState().path === '/story/*') {
      api.navigate('/docs/docs-getting-started--page');
    }
  });
});
