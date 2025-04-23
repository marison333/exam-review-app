// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname
});

export default [
    js.configs.recommended, // base JS rules
    ...compat.config({
        extends: ['next/core-web-vitals'],
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': 'error'
        }
    }),
    {
        name: 'prettier',
        rules: prettier.rules
    },
    {
        ignores: ['src/components/ui/**', 'src/lib/**']
    }
];
