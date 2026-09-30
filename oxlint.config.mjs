import { oxlint } from 'oxc-config-mantine';
import { defineConfig } from 'oxlint';

export default defineConfig({
  ...oxlint,
  ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}', '.next', 'storybook-static'],

  rules: {
    ...oxlint.rules,
    'no-console': 'warn',
    'no-useless-return': 'off',
  },
});
