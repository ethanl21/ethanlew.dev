import {
	presetUno,
	presetTypography,
	presetIcons,
	presetWebFonts,
	defineConfig,
	transformerDirectives,
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
				"vertical-align": "baseline",
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

	theme: {
		fontFamily: {
			chicago: "ChicagoFLF, sans-serif",
			mac: "Geneva, Tahoma, Verdana, sans-serif",
		},
	},

	preflights: [
		{
			getCSS: () => `
@font-face {
	font-family: 'ChicagoFLF';
	font-style: normal;
	font-weight: 500;
	src: local('ChicagoFLF'), url('https://fonts.cdnfonts.com/s/27099/ChicagoFLF.woff') format('woff');
}
`,
		},
	],

	transformers: [transformerDirectives()],
});
