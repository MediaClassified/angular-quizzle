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

			/* Functions */
			vm.startQuiz = startQuiz;
			vm.setQuestion = setQuestion;

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

			function answerQuestion (answer, index) {
				setQuestion(index+1);
			}
		}
})();