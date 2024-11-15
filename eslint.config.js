import eslintPluginAstro from "eslint-plugin-astro";
import unocss from "@unocss/eslint-config/flat";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  unocss,
  eslintConfigPrettier,
];
