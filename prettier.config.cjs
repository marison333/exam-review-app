module.exports = {
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: true,
    endOfLine: 'lf',
    jsxSingleQuote: true,
    printWidth: 160,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    overrides: [
        {
            files: ['**/*.css', '**/*.scss'],
            options: {
                printWidth: 240,
                singleQuote: false,
                tabWidth: 2
            }
        },
        {
            files: ['**/*.html'],
            options: {
                singleQuote: false
            }
        }
    ]
};
