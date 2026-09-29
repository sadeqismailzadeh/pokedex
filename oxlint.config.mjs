import { defineConfig } from 'oxlint';
import { oxlint } from 'oxc-config-mantine';

export default defineConfig({
  ...oxlint,
  ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}', '.next', 'storybook-static'],

  rules: {
    ...oxlint.rules,
    'no-console': 'warn',
  },
});
