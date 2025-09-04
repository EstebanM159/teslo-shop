/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['dist', 'node_modules', '.angular', 'coverage'],
  overrides: [
    // Reglas para TypeScript
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
      plugins: ['@angular-eslint', '@typescript-eslint', 'import', 'prettier'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        // Reglas heredadas útiles
        'padding-line-between-statements': [
          'warn',
          { blankLine: 'always', prev: '*', next: ['return', 'export'] },
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
           // 🔹 Fuerza línea en blanco entre decorador y clase
  { blankLine: 'always', prev: 'decorator', next: 'class' },
        ],
        'no-console': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_.*?$',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'import/order': [
          'warn',
          {
            groups: [
              'type',
              'builtin',
              'object',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            pathGroups: [
              {
                pattern: '~/**',
                group: 'external',
                position: 'after',
              },
            ],
            'newlines-between': 'always',
          },
        ],
        'prettier/prettier': [
          'warn',
          {
            printWidth: 100,
            trailingComma: 'all',
            tabWidth: 2,
            semi: false,
            singleQuote: false,
            bracketSpacing: false,
            arrowParens: 'always',
            endOfLine: 'auto',
            plugins: ['prettier-plugin-tailwindcss'],
          },
        ],
      },
    },

    // Reglas para templates Angular
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        // Agrega reglas para templates si querés
      },
    },
  ],
}
