import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: [
      "node_modules/",
      "test-results/",
      "playwright-report",
      "summary.json",
      ".vscode/*",
      ".github",
      "dependabot.yml",
      ".husky/",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
]);
