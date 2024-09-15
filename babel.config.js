module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: ['.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx', '.json'],
                root: ['./src'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@helpers': './src/helpers',
                    '@hooks': './src/hooks',
                    '@interfaces': './src/interfaces',
                    '@navigation': './src/navigation',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@test-mocks': './__mocks__',
                    '@test-helpers': './__helpers__',
                },
            },
        ],
        [
            'react-native-reanimated/plugin',
            {
                relativeSourceLocation: true,
            },
        ],
        ['@babel/plugin-transform-private-methods', { loose: true }],
    ],
    env: {
        production: {
            plugins: [
                [
                    'react-remove-properties',
                    {
                        properties: ['testID'],
                    },
                ],
                [
                    'react-native-reanimated/plugin',
                    {
                        relativeSourceLocation: true,
                    },
                ],
            ],
        },
    },
};
