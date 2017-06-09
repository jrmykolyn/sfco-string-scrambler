# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.0] - 2017-06-08
### Added
- Added `symbols` to output options (`data/chars/symbols.js`).
- Added default values to module (`data/defaults/index.js`). Default values used in cases where `stringScrambler` is invoked *without* an `options` argument.

### Changed
- Updated `stringScrambler` to support an optional `options` argument.
- Added `options`-related tests.
- Moved all output options into `data/chars/` directory. Renamed `chars.js` to `alpha.js`.

## [0.1.1] - 2017-06-07
### Added
- Added [Travis CI](https://travis-ci.org/) configuration file to project.

### Changed
- Dropped [spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) and implemented alternative solution for internal data concatenation.

## [0.1.0] - 2017-05-17
### Added
- Initialized project as `npm` package.
- Completed initial pass of `stringScrambler` function.
- Added tests coverage for current functionality using `AVA` test framework. 
- Exposed `stringScrambler` as sole package export.
- Added `README` file to project.
- Added `CHANGELOG` file to project.
- Added supporting/configuration files to package (eg. `.eslintrc.js`, `.editorconfig`, `.gitignore`).
