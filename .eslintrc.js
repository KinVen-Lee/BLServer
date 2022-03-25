module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never'
      }
    ],
    'import/prefer-default-export': 'off'
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    'import/resolver': {
      // 这个是解决引入时没后缀查不到的问题
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
      typescript: {
        project: './tsconfig.json'
      }
    }
  }
}
