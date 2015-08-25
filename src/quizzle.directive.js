(function() {
	angular
		.module('quizzle')
		.directive('quizzle', function() {
            return {
                restrict: 'E',
                scope: {
                    
                },
                templateUrl: 'quizzle.template.html',
                bindToController: true,
                controller: 'QuizzleController',
                controllerAs: 'vm'
            }
        });)
})();