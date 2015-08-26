module.exports = function () {
	var build = './dist/';
	var src   = './src/';

	return {
		moduleName: 'quizzle.js',
		module:src+'*.module.js',
		order: [
			'*.module.js',
			'*.js'
		],
		js: src+'*.js',
		css:src+'**/*.css'
	}
}