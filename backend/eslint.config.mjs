import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginNode from 'eslint-plugin-node';
import pluginMongo from 'eslint-plugin-mongodb';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.mongo },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: [pluginPrettier],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.js'],
    plugins: [pluginNode],
    extends: ['plugin:node/recommended'],
    'node/no-unpublished-require': 'off',
  },
  {
    files: ['**/*.js'],
    plugins: [pluginMongo],
    extends: ['plugin:mongodb/recommended'],
  },
];
