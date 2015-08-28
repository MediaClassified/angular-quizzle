(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorController', GeneratorController);

		function GeneratorController () {
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
				vm.index++;
				setState(vm.index);
			}

			function prevState () {
				vm.index--;
				setState(vm.index);
			}
		}
})();