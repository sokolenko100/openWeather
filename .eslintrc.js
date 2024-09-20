module.exports = {
    root: true,

    extends: [
        '@react-native-community',
        'plugin:jest/recommended',
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
    plugins: ['@typescript-eslint', 'jest'],
    rules: {
        'no-undef': 'warn',
        'linebreak-style': 'warn',
        'eslint-comments/no-unlimited-disable': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        'no-void': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'no-shadow': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
    },
    globals: {
        JSX: 'readonly',
    },
    env: {
        'jest/globals': true,
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
            env: {
                'jest/globals': true,
            },
        },
    ],
};
