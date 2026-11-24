import { configs, plugins } from 'eslint-config-airbnb-extended';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['build/', 'coverage/', 'node_modules/']),

  plugins.stylistic,
  plugins.importX,
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,

  ...configs.base.recommended,
  ...configs.react.recommended,

  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      // CRA usa JSX em arquivos .js
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      // React 19 / novo JSX transform não exige import de React
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  prettier,
]);
