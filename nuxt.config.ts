// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
	],
	devtools: { enabled: true },
	app: {
		head: {
			title: "MindPad | Take notes", // default fallback title
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	fonts: {
		families: [
			{
				name: "Geist",
				provider: "google",
				weights: [400, 500, 600, 700],
			},
		],
	},
});
