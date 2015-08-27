(function() {

	angular
		.module('quizzle')
		.directive('quizzle', function() {
            return {
                restrict: 'E',
                scope: {
                    quiz: "=",
                    startOn: "=",
                    onFinish: "&",
                    /* Must be a way to make separate */
                    repeat: "="
                },
                templateUrl: 'quizzle.template.html',
                bindToController: true,
                controller: 'QuizzleController',
                controllerAs: 'vm',
                link:function($scope, element, attrs, ctrl) {
                   if (attrs.onFinish == undefined || typeof(attrs.onFinish) != 'function'){
                        attrs.onFinish = function () {
                            return null;
                        }
                    } 
                //     if (attrs.repeat !== undefined) {
                //         console.log('has repeat')
                //         ctrl.repeat = true;
                //     }
                }
            }
        });
})();