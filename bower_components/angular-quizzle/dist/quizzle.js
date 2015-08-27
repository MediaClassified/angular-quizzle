angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("quizzle.template.html","<div class=\"quizzle-container\" ng-if=\"vm.activate\">\r\n    <div class=\"quizzle-question\">\r\n        <div class=\"quizzle-question-text\">\r\n            <span class=\"question\">{{vm.current.text}}</span>\r\n            <img class=\"question-img\" ng-class=\"{\'hide\': !vm.current.img}\" ng-src=\"{{vm.current.img}}\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"quizzle-answer-container\" ng-class=\"{\'hide\': !vm.current.answer}\">\r\n        <div class=\"quizzle-answer\" ng-click=\"vm.answerQuestion(vm.left, \'left\')\">\r\n            <span ng-if=\"!vm.left.img\">{{vm.left.text}}</span>\r\n            <img class=\"quizzle-answer-img\" ng-class=\"{\'hide\': !vm.left.img}\" ng-src=\"{{vm.left.img}}\" />\r\n        </div>\r\n        <div class=\"quizzle-answer\" ng-click=\"vm.answerQuestion(vm.right, \'right\')\">\r\n            <span ng-if=\"!vm.right.img\">{{vm.right.text}}</span>\r\n            <img class=\"quizzle-answer-img\" ng-class=\"{\'hide\': !vm.right.img}\" ng-src=\"{{vm.right.img}}\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"quizzle-answer-container\" ng-if=\"vm.repeat\" ng-class=\"{\'hide\': vm.current.answer}\">\r\n        <a class=\"quizzle-repeat-link\" ng-click=\"vm.resetQuiz()\">Click here to take the quiz again.</a>\r\n    </div>\r\n</div>");}]);
(function(){
    angular.module('quizzle', ['ngAnimate', 'templates'])
})();
(function() {
	angular
		.module('quizzle')
		.controller('QuizzleController', QuizzleController);

		function QuizzleController ($rootScope, $http) {
			var vm = this;
			vm.activate = false;
			vm.current = null;
			vm.answer = null;
			vm.index = null;
			vm.results = {
				scores: {},
				answers: []
			};

            vm.visible = true;

            vm.isLeft = false;
            vm.isRight = false;

			/* Functions */
			vm.startQuiz = startQuiz;
			vm.setQuestion = setQuestion;
			vm.answerQuestion = answerQuestion;
			vm.resetQuiz = resetQuiz;

			vm.finish = function (results) {
                vm.onFinish({results: results});
            };

			activate();

			function activate(){
				$rootScope.$watch(function () {
					return vm.quiz;
				}, function (quiz) {
					if (quiz) 
						startQuiz();
				});
			};

			function startQuiz () {
				/* Checks if start-on variable defined */
				if(vm.startOn != undefined) {
					$rootScope.$watch(function () {
						return vm.startOn;
					}, function (value) {
						if (value) {
							setQuestion(0);
							vm.activate = true;
						} 
					})
				} else {
					setQuestion(0);
					vm.activate = true;
				}	
			}

			function setQuestion(index) {
				vm.index = index;
				vm.current = vm.quiz[index];
				vm.left = vm.quiz[index].answer.left;
				vm.right = vm.quiz[index].answer.right;
			}

			function answerQuestion (answer, direction) {
				/* Store scores */
				answer.categories.map(function(category) {
					if(!vm.results.scores[category]) {
						vm.results.scores[category] = 1;
					} else {
						vm.results.scores[category]++;
					}
				});

				/* Store answers */
				vm.results.answers.push({
					question: vm.current.text,
					answer: answer
				});

				/* Go to next question */
				var next = vm.index + 1;
				if(vm.quiz[next]) {
					setQuestion(next);
                    if (direction == 'left') {
                        toggleLeft();
                    } else if (direction == 'right') {
                        toggleRight();
                    }
				} else {
					vm.finish(vm.results);
					vm.current = {
						text: 'Thanks for completing the quiz!',
						answer: null
					};
				}
			}

			function resetQuiz () {
				vm.results = {
					scores: {},
					answers: []
				};
				setQuestion(0);
			}
            function toggleLeft() {
                vm.isLeft = true;
                vm.visible = !vm.visible;
            }

            function toggleRight() {
                vm.isRight = true;
                vm.visible = !vm.visible;
            }
		}
})();
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