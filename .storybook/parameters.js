import theme from './theme';

export default {
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme,
    /**
     * Sort stories and their kinds.
     * Thanks @JohnAlbin for most of the following source code.
     */
    storySort: (a, b) => {
      // Sort by root names, using the ordering specified in rootOrder array.
      const rootOrder = ['Atoms', 'Molecules', 'Organisms', 'Docs'];

      // Getting the stories root names
      const aRootName = a[1].kind.split('|')[0];
      const bRootName = b[1].kind.split('|')[0];

      // If the two stories are from the "Docs" kind, sort filenames
      // alphabetically.
      if (aRootName === 'Docs' && bRootName === 'Docs') {
        const aFullPath = a[1].parameters.fileName.split('/');
        const bFullPath = b[1].parameters.fileName.split('/');

        const aFileName = aFullPath[aFullPath.length - 1];
        const bFileName = bFullPath[bFullPath.length - 1];

        return aFileName.localeCompare(bFileName.id);
      }

      // If the two stories have the same story kind, then use the default
      // ordering, which is the order they are defined in the story file.
      if (a[1].kind === b[1].kind) {
        return 0;
      }

      // If the stories are in differnt story kinds, sort by root.
      if (aRootName !== bRootName) {
        // If a root is not found in rootOrder, its index will be -1
        // and we will sort it last.
        const aRootIndex = rootOrder.indexOf(aRootName);
        const bRootIndex = rootOrder.indexOf(bRootName);
        // If at least one of the roots is found, sort by rootOrder.
        if (!(aRootIndex === bRootIndex === -1)) {
          return (aRootIndex === -1 ? rootOrder.length : aRootIndex)
            - (bRootIndex === -1 ? rootOrder.length : bRootIndex);
        }
      }

      // Otherwise, use alphabetical order.
      return a[1].id.localeCompare(b[1].id)
    },
  },
};
