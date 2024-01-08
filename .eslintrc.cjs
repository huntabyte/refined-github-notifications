module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest"
	},
	env: {
		browser: true,
		es2024: true,
		node: true
	},
	globals: { NodeJS: true },
	rules: {
		"no-console": "warn",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}
		]
	}
};
