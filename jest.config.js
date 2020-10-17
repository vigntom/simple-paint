module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ],
  transform: {
    '^.+\\jsx?$': 'babel-jest',
    '^.+\\.(css|scss)$': 'jest-transform-stub',
    '^.+\\.svg$': 'jest-svg-transformer'
  }
}
