module.exports = function () {
	var build = './dist/';
	var src   = './src/';

	return {
		moduleName: 'quizzle',
		module:src+'*.module.js',
		order: [
			'templates.js',
			'*.module.js',
			'*.js'
		],
		html: src+'*.html',
		js: src+'*.js',
		css:src+'**/*.css'
	}
}