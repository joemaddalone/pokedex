# Pokedex


## npm scripts

`npm install`

Will install the upstream dePendencies needed for the web application.

`npm run start`

Launches the web application in development mode at http://localhost:9999

`npm run build`

Builds a production version of the webapplication in `/build/`. This directory can then be served with any local server you may jave access to.  serve, http-server, or browser-sync are good node-based choices.

`npm run analyze`

Launches a Webpack Bundle Analyzer of our production build.  This great for figuring out what's making a bundle too large.

`npm run test`

Will run all unit tests in the application. A string or path may be passed in order to run singe tests or ssets of tests.

`npm run test:coverage`

Same as `npm run test`, but will also produce a coverage report in the terminal and an interactive report located `coverage/lcov-report/index.html`

<p align="center">
<p><b>Terminal Report</b></p>
  <img src="./docs/istanbul.png" alt="Size Limit CLI" width="738">
  <p><b>Interactive Report</b></p>
    <img src="./docs/lcov.png" alt="Size Limit CLI" width="738">
</p>

`npm run lint`

Runs our eslint process and report it's findings

`npm run lint-fix`

Runs our attempt to automatically fix eslint error.

`npm run format`

Runs our prettier configuration. This happens autoamtically when commiting code.



## i18n (Internationalization)

Libraries:

* [i18next](https://www.i18next.com/)
* [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
* [i18next-localstorage-cache](https://github.com/i18next/i18next-localStorage-cache)

Plain English strings should be added to ./src/i18n/en.json and organized by feature or section of the application.

When appropriate we can have the strings in this file translated to another language in another language file.

### Usage:

**Import the translate function into your file.**

`import { translate } from 'poke-i18n'`

**Set namespace as array of string(s) only.**

`const t = translate(['signin'])`

Our namespace here is 'signin' In the event that the same key exists in more than one namespace the first namespace will be used


**"t" can then be used in any Javascript file or with React classes or function components.**

`<p>{t('lostPassword')}</p>`

## Pokedex unit testing

We use [Jest](https://facebook.github.io/jest/) and [react-testing-library](https://github.com/kentcdodds/react-testing-library) for unit tests in pokedex.

### Running the unit tests

#### Run all tests with coverage report

`npm run test`

This will run all tests in the application without generating a coverage report.

### Run all tests without coverage report

`npm run test:coverage`

This will run all tests in the application and generate a coverage report in `./coverage/`. In this directory you'll find `lcov-report/index.html` which can be opened in a browser for review.

### Run specific tests with or without coverage report

`yarn test:coverage <pattern>`

This will run all tests where the filename matches the pattern and generate a coverage report for those tests.

`yarn test <pattern>`

This will run all tests where the filename matches the pattern without generating a coverage report for those tests.

### Set a watch

`yarn test <pattern> --watch`

This will run all tests where the filename matches the pattern without generating a coverage report for those tests. This will also rerun any time the test(s) are changed.

## Writing unit tests

### Organization and Naming Convention

Unit tests are located next to the code or component they test.
Filenames should be identical to the code or component tested, but with an extension of `.test.js`.

Example naming:`Application.js` --> `Application.test.js`

### An example unit test

```
import React from 'react'; // import as needed if testing a React component
import renderWith from '../test-util/renderWith'; // This is our abstracted test renderer for React components

describe('<Component />', () => { // Describe the suite of tests about to be run
	beforeEach(() => {
		// A set of commands or variables defined before each test.
		// This is often where you will build up a set of common props for React Components
	})

	afterEach(() => {
		// If needed, this is for cleaning up after each test.
		// However, you'll seldom need this as we've automated a cleanup process.
	})

	it('renders', () => {
		// Render our React component using renderWith.
		const { getByTestId } = renderWith(<Component {...props} />, {
      		withStore: true,
    	});
		// Assert the component was rendered successfully.
		expect(getByTestId('some-test-id')).toBeInTheDocument();
	});
})
```

### renderWith

### Summary

*   Wrap a component in a Stote Provider, `{ withStore true }`
*   Wrap a component inthe appropriate react-router Router, `{ withRouter: true }`


### renderWith examples:

```javascript
const { getTestById } = renderWith(<Component />);
```

Works identically to react-testing-library's `render`.

### Options examples

```javascript
{
	withStore: true || false,
	// default = false, wraps component in a RecoilRoot

	withRouter: true || false,
	// default = false, wraps component in a MemoryRouter or BrowserRouter accordingly,

}
```

### Notes about usage

You'll probably never need to:

```javascript
import { render } from 'react-testing-library';
```

Because you can just

```javascript
import renderWith from './renderWith';
const { getByTestId } = renderWith(<AddFavorite {...props} />, {
  withStore: true,
});
```



