/* eslint-disable @typescript-eslint/no-require-imports */
const nextCwv = require("eslint-config-next/core-web-vitals");
const prettier = require("eslint-config-prettier");
const i18nextPlugin = require("eslint-plugin-i18next");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...nextCwv,

  { rules: prettier.rules },

  {
    settings: {
      react: { version: "19" },
    },
  },

  {
    plugins: {
      i18next: i18nextPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "block-scoped-var": "warn",
      "eol-last": ["warn", "always"],

      // TS
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-deprecated": "warn",

      // Hooks
      "react-hooks/exhaustive-deps": [
        "warn",
        { additionalHooks: "useLoader" },
      ],

      // JSX
      "react/no-unescaped-entities": "off",
      "react/jsx-curly-brace-presence": ["warn", { props: "always" }],
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      "react/jsx-no-target-blank": [
        "warn",
        { enforceDynamicLinks: "always", warnOnSpreadAttributes: true },
      ],
      "react/jsx-sort-props": [
        "warn",
        { shorthandLast: true, reservedFirst: true },
      ],
      "react/self-closing-comp": ["warn", { component: true, html: true }],

      // Restricted imports
      "no-restricted-imports": [
        "warn",
        {
          paths: [
            {
              name: "react-router-dom",
              importNames: ["Routes", "Link", "NavLink"],
              message: "Please use components from services/routing/components",
            },
            {
              name: "react-router-dom",
              importNames: ["useParams", "useNavigate"],
              message: "Please use hooks from services/routing",
            },
            {
              name: "formik",
              importNames: ["Formik", "Form"],
              message:
                "Please use Form from services/forms which contains Formik and Form",
            },
          ],
        },
      ],

      "testing-library/prefer-screen-queries": "off",
    },
  },

  {
    files: [
      "src/__tests__/**/*",
      "src/__mocks__/**/*",
      "src/__tests-utils__/**/*",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-use-before-define": "off",
    },
  },
];
