// @ts-check
import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "eslint.config.mjs",
      "postcss.config.js",
      "tailwind.config.js",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { settings: { react: { version: "detect" } } },
  react.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      // With the new JSX Transform in React 17,
      // we don't need to import React in every file.
      "react/react-in-jsx-scope": "off",
      // typescript-eslint
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  }
);
