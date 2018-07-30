

module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  testMatch: ['**/__tests__/**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/static/'],
  collectCoverageFrom: [
    'lib/**/*.js',
  ],
};
