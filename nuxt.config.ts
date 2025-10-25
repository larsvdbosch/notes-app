// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
		"@nuxtjs/supabase",
	],
	devtools: { enabled: true },
	app: {
		head: {
			title: "Notably | Take notes", // default fallback title
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	css: ["~/assets/css/main.css"],
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
	supabase: {
		redirect: false,
	},
});
