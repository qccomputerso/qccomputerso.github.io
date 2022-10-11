import { resolve } from "path";

import { defineConfig } from "vite";

import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			reactivityTransform: true
		}),
		eslint(),
		checker({ typescript: true }),
		tsconfigPaths()
	],
	base: "./",
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				events: resolve(__dirname, "events/index.html"),
				contacts: resolve(__dirname, "contacts/index.html"),
				"o-day": resolve(__dirname, "o-day/index.html"),
			}
		}
	}
});