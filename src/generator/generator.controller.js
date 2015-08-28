(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorController', GeneratorController);

		function GeneratorController (QuizService) {
			var vm = this;
			vm.current = null;
			vm.index = 0;
			vm.states = [
				"start",
				"categories",
				"questions",
				"answers",
				"finish"
			];

			vm.setState = setState;
			vm.nextState = nextState;
			vm.prevState = prevState;

			activate();

			function activate() {
				setState(0);
			}			

			function setState (index) {
				vm.current = vm.states[index];
			}

			function nextState () {
				if (canTransition(vm.current)){
					vm.index++;
					setState(vm.index);
				}
			}

			function prevState () {
				vm.index--;
				setState(vm.index);
			}
			function canTransition(state) {
				switch(state) {
					case 'questions':
						return (QuizService.quiz.length?true:false);
						break;
					case 'answers':
						var completed = true;
						angular.forEach(QuizService.quiz, function (question) {
							var answer = question.answer;
							if (!((answer.left.text || answer.left.img) && (answer.right.text || answer.right.img))) {
								completed = false;
							}
						});
						return completed;
						break;
					default:
						return true;
						break;
				}
			}
		}
})();