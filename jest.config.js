const path = require('path');

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!src/main.tsx',
    '!src/config/*',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
    './src/common/*.{ts,tsx}': {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.module\\.scss$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, ''),
    path.join(__dirname, 'test'),
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
