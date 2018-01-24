module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '**/?(*.)(spec|test).ts?(x)'
  ],
  collectCoverageFrom: [
    '**/?(*.)ts?(x)'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/@types/'
  ],
  mapCoverage: true,
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  setupTestFrameworkScriptFile: './setupJest.js',
  moduleDirectories: [
    'node_modules'
  ]
};