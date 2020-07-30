module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/resources/assets/scripts/$1',
		'@imgs/(.*)$': '<rootDir>/resources/assets/images/$1'
	}
}
