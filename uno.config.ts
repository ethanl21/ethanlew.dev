import {
	presetUno,
	presetTypography,
	presetIcons,
	presetWebFonts,
	defineConfig,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno({
			dark: "class",
		}),

		presetTypography(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				montserrat: "Montserrat",
				lobster: "Lobster",
				inconsolata: "Inconsolata",
			},
		}),
	],
});
