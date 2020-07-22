require('dotenv').config()

const path = require('path')

module.exports = {
	env: {
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
		REPO_FULL_NAME: process.env.REPO_FULL_NAME,
		BASE_BRANCH: process.env.BASE_BRANCH,
		},
	webpack: (config, { dev }) => {
		// Perform customizations to webpack config

		// Important: return the modified config
		// config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
		return config
	},
	webpackDevMiddleware: (config) => {
		// Perform customizations to webpack dev middleware config

		// Important: return the modified config
		return config
	}
}