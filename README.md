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

`npm run lint`

Runs our eslint process and report it's findings

`npm run lint-fix`

Runs our attempt to automatically fix eslint error.

`npm run format`

Runs our prettier configuration. This happens autoamtically when commiting code.



## i18n (Internationalization)

Libraries:

* i18next
* i18next-browser-languagedetector
* i18next-localstorage-cache

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


