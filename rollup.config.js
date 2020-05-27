import minify from "rollup-plugin-babel-minify"
import analyze from "rollup-plugin-analyzer"
import typescript from "rollup-plugin-typescript2"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel"
import builtins from "rollup-plugin-node-builtins"
//import banner from "rollup-plugin-banner"
export default {
	input: ["./src/index.ts"],
	output: {
		file: "./dist/main.js",
		format: "cjs",
	},
	plugins: [
		commonjs(),
		resolve({ preferBuiltins: true }),
		builtins(),
		typescript({
			tsconfig: "tsconfig.json",
		}),
		babel(),
		minify({
			comments: false,
		}),
		analyze({
			summaryOnly: true,
		}),
	],
	inlineDynamicImports: true,
}
