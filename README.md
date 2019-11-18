# storybook-staterkit

## Installation

Prerequisites: [Node.js](https://nodejs.org/) >=8.10.0

Inside the directory of your choice, install a copy of the starterkit with:

```bash
$ curl -L https://github.com/liip/storybook-starterkit/archive/master.tar.gz | tar zx --strip 1
```

Then install the npm dependencies with:

```bash
$ npm install
```

## Getting Started

To start the development server, run:

```bash
$ npm start
```

You can now access your styleguide at `localhost:3000`.

You're all set, start to:

* Create components as `.twig` (Twig) files inside the `src` directory
* Create Storybook stories as `.stories.js` alongside `.twig` components inside the `src` directory
* Write some styles inside `assets/scss/styleguide.scss`
* Write JavaScript inside `assets/js/styleguide.js`
* Put some `.svg` icons in the `assets/icons` directory
* Write documentation as `.stories.mdx` (Markdown and JSX) files inside the `docs` directory.

## Build

You can build a static version of the styleguide to deploy it wherever you like by running:

```bash
$ npm run build
```

The generated files go to the dist directory.

## Theming

You can customize Storybook interface with the following files:

* `.storybook/theme.js` for styles that are natively supported by Storybook
* `.storybook/manager-head.html` for overriding styles that are not supported by the `theme.js`
* `.storybook/parameters.js` for showing/hiding parts of the Storybook interface

**Note**: You can add, remove or change the sorting of stories kinds by updating
the `rootOrder` array in the `storySort` function, in the `./storybook.parameters.js` file.
