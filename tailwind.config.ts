import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-img": "linear-gradient(to right, rgba(33, 33, 33, 0.75) 0%, rgba(33, 33, 33, 0.3) 75%, transparent 100%), url('/images/hero-img-ngukir.jpg')",
				"02-img": "url('/images/02-img.jpg')",
				"04-img": "url('/images/04-img.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
