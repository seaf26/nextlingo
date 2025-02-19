import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules:{
    // Disable no-unused-vars for components
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // Disable no-unused-expressions
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    // Disable react-hooks/exhaustive-deps
    "react-hooks/exhaustive-deps": "off",
    // Disable react-hooks/rules-of-hooks
    "react-hooks/rules-of-hooks": "off",
    // Disable react/no-unescaped-entities
    "react/no-unescaped-entities": "off",
    }
  }
];

export default eslintConfig;
