(function() {
	angular
		.module('quizzle')
		.controller('QuizzleController', QuizzleController);

		function QuizzleController ($rootScope) {
			var vm = this;

			activate();

			function activate(){
				if(vm.startOn != undefined) {
					console.log('activate')
					$rootScope.$watch(function () {
						return vm.startOn;
					}, function (value) {
						if (value) {
							console.log('Starton')
							// Start Quiz
						}
					})
				} else {
					console.log('no-startON')
					// Start Quiz
				}			
			}


		}
})();