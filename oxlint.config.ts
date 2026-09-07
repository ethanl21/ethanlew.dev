import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["typescript", "jsx-a11y"],
	env: {
		browser: true,
		es2022: true,
	},
});
