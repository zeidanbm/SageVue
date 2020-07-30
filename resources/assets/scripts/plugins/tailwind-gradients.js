// ./plugins/gradients.js
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
	const gradients = theme('gradients', {})
	const gradientVariants = variants('gradients', [])

	const utilities = _.map(gradients, ([start, end], name) => ({
		[`.bg-gradient-${e(name)}`]: {
			background: `${start}`,
			background: `-moz-linear-gradient(45deg, ${end} 0%, ${start} 100%)`,
			background: `-webkit-linear-gradient(45deg, ${end} 0%, ${start} 100%)`,
			background: `linear-gradient(45deg, ${end} 0%, ${start} 100%)`,
			filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="${start}",endColorstr="${end}",GradientType=1)`,
			backgroundImage: `linear-gradient(to right, ${start}, ${end})`
		}
	}))
	addUtilities(utilities, gradientVariants)
})



