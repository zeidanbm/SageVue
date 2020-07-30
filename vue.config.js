const path = require('path')
const chokidar = require('chokidar')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: '',
	filenameHashing: true,
	pages: {
		index: {
			entry: 'resources/assets/scripts/app.ts',
			template: 'index.php',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	// purge: {
	// 	enabled: process.env.NODE_ENV === 'production',
	// 	content: ['./index.php', './resources/assets/scripts/**/*.vue', './resources/assets/views/**/*.blade.php']
	// },
	devServer: {
		before(app, server) {
			chokidar.watch(['./resources/views/**/*.blade.php']).on('all', function() {
				server.sockWrite(server.sockets, 'content-changed')
			})
		},
		index: '',
		contentBase: './dist',
		historyApiFallback: true,
		compress: true,
		overlay: true,
		port: 3000,
		open: true,
		hot: true,
		host: 'localhost',
		public: 'sage.test',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		writeToDisk: true
	},
	configureWebpack: {
		plugins: [new WebpackAssetsManifest()]
	},
	chainWebpack: (config) => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap((options) => Object.assign(options, { limit: 10240 }))

		config.resolve.alias.set('@', path.resolve(__dirname, 'resources/assets/scripts'))
		config.resolve.alias.set('@imgs', path.resolve(__dirname, 'resources/assets/images'))
	}
}
