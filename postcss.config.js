const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
	plugins: [
		tailwindcss,
		process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
		process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
		purgecss({
			content: ['./index.php', './resources/assets/scripts/**/*.vue', './resources/assets/views/**/*.blade.php']
			// defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
		})
	]
}
