(function() {
	angular
		.module('core', [
			'quizzle',
			'ngAnimate'
		]);

	angular
		.module('core')
		.config(['$compileProvider',
		    function ($compileProvider) {
		        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
		}]);
})();