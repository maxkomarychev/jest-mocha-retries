# jest-mocha-retries

Sample project showing difference between how jest and mocha retry tests.

Install dependencies with `yarn`
Run tests with jest using `yarn test-jest`
Run tests with mocha using `yarn test-mocha`

The difference is that mocha retries given test until it's green or red while
jest runs all tests first and then retries failed ones.
