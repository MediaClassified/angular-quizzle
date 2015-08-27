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

			function answerQuestion (answer) {
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
		}
})();