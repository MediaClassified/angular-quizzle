angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("quizzle.template.html","<div class=\"quizzle-container\" ng-if=\"vm.activate\">\r\n    <div class=\"quizzle-slide\" ng-repeat=\"slide in vm.quiz\" ng-class=\"{\'quizzle-slide-current\':vm.index == $index, \'quizzle-slide-left\': vm.answered[$index] == \'left\', \'quizzle-slide-right\': vm.answered[$index] == \'right\'}\" ng-swipe-left=\"vm.answerQuestion(vm.left, \'left\', $index)\" ng-swipe-right=\"vm.answerQuestion(vm.right, \'right\', $index)\">\r\n        <div class=\"quizzle-question\">\r\n            <div class=\"quizzle-question-content\">\r\n                <span class=\"quizzle-question-text\">{{slide.text}}</span>\r\n                <span class=\"quizzle-question-icon icon\" ng-class=\"vm.iconClass(slide.icon)\"></span>\r\n                <img class=\"quizzle-question-img\" ng-class=\"{\'hide\': !slide.img}\" ng-src=\"{{slide.img}}\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"quizzle-answer-container\" ng-class=\"{\'hide\': !slide.answer}\">\r\n            <div class=\"quizzle-answer quizzle-answer-left\" ng-click=\"vm.answerQuestion(vm.left, \'left\', $index)\"> \r\n                <div class=\"quizzle-answer-content\">\r\n                    <span class=\"quizzle-answer-text\" ng-class=\"{\'hide\': slide.answer.left.icon}\">{{slide.answer.left.text}}</span>\r\n                    <span class=\"quizzle-answer-img icon\" ng-class=\"vm.iconClass(slide.answer.left.icon)\"></span>\r\n                    <img class=\"quizzle-answer-img\" ng-src=\"{{slide.answer.left.img}}\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"quizzle-answer quizzle-answer-right\"  ng-click=\"vm.answerQuestion(vm.right, \'right\', $index)\">\r\n                <div class=\"quizzle-answer-content\">\r\n                    <span class=\"quizzle-answer-text\" ng-class=\"{\'hide\': slide.answer.right.icon}\">{{slide.answer.right.text}}</span>\r\n                    <span class=\"quizzle-answer-img icon\" ng-class=\"vm.iconClass(slide.answer.right.icon)\"></span>\r\n                    <img class=\"quizzle-answer-img\" ng-src=\"{{slide.answer.right.img}}\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"quizzle-slide quizzle-done\" ng-if=\"vm.checkDone()\">\r\n        <div class=\"quizzle-question quizzle-done-message\">\r\n            <div class=\"quizzle-question-content quizzle-done-content\">\r\n                <span class=\"quizzle-question-text quizzle-done-text\">{{vm.current.text}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"quizzle-answer-container quizzle-done-actions\" ng-if=\"vm.repeat\" ng-class=\"{\'hide\': vm.current.answer}\">\r\n            <a class=\"quizzle-repeat-link\" ng-click=\"vm.resetQuiz()\">Click here to take the quiz again.</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");}]);
(function(){
    angular.module('quizzle', ['ngAnimate', 'templates', 'ngTouch'])
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
            vm.done = false;
            vm.answered = {};
			vm.scores = {};
			vm.results = {
				scores: {},
				answers: []
			};

			/* Functions */
			vm.startQuiz = startQuiz;
			vm.setQuestion = setQuestion;
			vm.answerQuestion = answerQuestion;
            vm.isAnswered = isAnswered;
            vm.checkDone = checkDone;
			vm.resetQuiz = resetQuiz;
			vm.finish = function (results) {
                vm.onFinish({results: results});
            };
            vm.iconClass = iconClass;

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

			function answerQuestion (answer, direction, index) {
				/* Store scores */
				answer.categories.map(function(category) {
					if(!vm.results.scores[category]) {
						vm.results.scores[category] = 1;
					} else {
						vm.results.scores[category]++;
					}
				});
                slide(direction, index);

				/* Store answers */
				vm.results.answers.push({
					question: vm.current.text,
					answer: answer
				});

				/* Go to next question */
				var next = vm.index + 1;
				if(vm.quiz[next]) {
					setQuestion(next);
				} else {
                    vm.index = vm.index + 1;
                    vm.done = true;
					vm.current = {
						text: 'Thanks for completing the quiz!',
						answer: null
					};
					vm.finish(vm.results);
				}
			}

            function slide(direction, index) {
                if (direction == 'left') {
                    vm.answered[index] = 'left';
                } else if (direction == 'right') {
                    vm.answered[index] = 'right';
                }
            }

			function resetQuiz () {
				vm.results = {
					scores: {},
					answers: []
				};
                vm.answered = {};
                vm.done = false;
                startQuiz();
			}

            function isAnswered(index) {
                return vm.answered[index] != undefined;
            }

            function checkDone() {
                return vm.done;
            }

            function iconClass (icon) {
            	if (icon) {
			        return "icon-"+icon;
			    } else {
			        return "";
            	}
            }

		}
})();
(function() {

	angular
		.module('quizzle')
		.directive('quizzle', ['$swipe', function ($swipe) {
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
        }]);
})();