module.exports = {
    root: true,
    extends: [
        'plugin:import/typescript',
        '@react-native',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        files: ['*.ts', '*.tsx'],
        project: ['./tsconfig.json'],
        tsconfigRootDir: './',
    },
    ignorePatterns: ['/*.*', 'FontsBase64.js'],
    plugins: ['@typescript-eslint'],
    rules: {
        'no-undef': 'warn',
        'linebreak-style': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        'no-void': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    globals: {
        JSX: 'readonly',
    },
    env: {
        'jest/globals': true,
    },
};
