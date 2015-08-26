module.exports = function () {
	var build = './dist/';
	var src   = './src/';

	return {
		module:src+'*.module.js',
		js: src+'**/*.js',
		css:src+'**/*.css'
	}
}