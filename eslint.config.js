import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginNode from 'eslint-plugin-node';
import pluginMongo from 'eslint-plugin-mongodb';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.mongo },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: pluginPrettier,
      node: pluginNode,
      mongodb: pluginMongo,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.js'],
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/no-unpublished-require': 'off',
      'node/no-extraneous-require': 'error',
      'node/no-missing-require': 'error',
    },
  },
  {
    files: ['**/*.js'],
    plugins: {
      mongodb: pluginMongo,
    },
    rules: {},
  },
];
