module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'es2022',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint', 'simple-import-sort'],
    rules: {
        indent: ['error', 4],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'consistent-return': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'no-redeclare': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        // Side effect imports.
                        '^\\u0000',
                        // Packages. `vue` related packages come first.
                        '^vue',
                        '^@?\\w',
                        // Internal packages.
                        '^(src|components|config|utils|pages|hooks|api)(/.*|$)',
                        // Parent imports. Put `..` last.
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        // Other relative imports. Put same-folder imports and `.` last.
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                        // Style imports.
                        '^.+\\.s?css$'
                    ]
                ]
            }
        ],
        'simple-import-sort/exports': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports'
            }
        ],
        'no-undef': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                enums: false,
                typedefs: false,
                ignoreTypeReferences: false,
                functions: false
            }
        ]
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off'
            }
        }
    ]
}
