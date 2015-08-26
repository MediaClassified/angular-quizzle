(function() {

	angular
		.module('quizzle')
		.directive('quizzle', function() {
            return {
                restrict: 'E',
                scope: {
                    quiz: "=",
                    startOn: "="
                },
                templateUrl: '../angular-quizzle/src/quizzle.template.html',
                bindToController: true,
                controller: 'QuizzleController',
                controllerAs: 'vm'
            }
        });
})();