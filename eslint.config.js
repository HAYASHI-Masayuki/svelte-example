import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintPluginSvelte from "eslint-plugin-svelte"

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    rules: {
      semi: ['error', 'never'],
    },
  },
]
