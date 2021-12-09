module.exports = {
  collectCoverage: true,
  // collectCoverageFrom: ['src/**'],
  collectCoverageFrom: ['src/**/{!(index.js),}.js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
};
