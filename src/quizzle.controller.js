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

		}
})();