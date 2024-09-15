/**
 * Jest config
 */
module.exports = {
    transform: {
        '\\.svg$': '<rootDir>/fileTransformer.js',
    },
    verbose: true,
    preset: 'react-native',
    transformIgnorePatterns: ['/node_modules/(?!react-native)/.+'],
    setupFilesAfterEnv: [
        './node_modules/react-native/jest/setup.js',
        './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/babel.config.js',
        '<rootDir>/metro.config.js',
        '<rootDir>/node_modules',
        '<rootDir>/source/assets',
    ],
};
