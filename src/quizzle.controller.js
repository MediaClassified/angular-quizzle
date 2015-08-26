(function() {
	angular
		.module('quizzle')
		.controller('QuizzleController', QuizzleController);

		function QuizzleController ($rootScope) {
			var vm = this;

			activate();

			function activate(){
				/* Checks if quiz is defined */
				if(!vm.quiz) {
					console.log('Please enter a quiz');
					return;
				}

				if(vm.startOn != undefined) {
					$rootScope.$watch(function () {
						return vm.startOn;
					}, function (value) {
						if (value) {
							console.log('Quiz has started')
							// Start Quiz
						} else {
							console.log('Waiting for variable...')
						}
					})
				} else {
					console.log('No start-on variable defined. Quiz has started.')
					// Start Quiz
				}			
			}


		}
})();