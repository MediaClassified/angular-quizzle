(function() {

	angular
		.module('quizzle')
		.directive('quizzle', function() {
            return {
                restrict: 'E',
                scope: {
                    quiz: "=",
                    startOn: "=",
                    onFinish: "&"
                },
                templateUrl: '../angular-quizzle/src/quizzle.template.html',
                bindToController: true,
                controller: 'QuizzleController',
                controllerAs: 'vm',
                link:function($scope, element, attrs) {
                   if (attrs.onFinish == undefined || typeof(attrs.onFinish) != 'function'){
                        attrs.onFinish = function () {
                            return null;
                        }
                    } 
                }
            }
        });
})();