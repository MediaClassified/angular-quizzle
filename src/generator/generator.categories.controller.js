(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorCategoriesController', GeneratorCategoriesController);

		function GeneratorCategoriesController ($scope, QuizService) {
			var vm = this;

			vm.categories = [];
			vm.category = null;
			vm.add = add;
			vm.remove = remove;

			activate();
			///////////////////

			function activate() {
				$scope.$watch(function () {
					return QuizService.categories;
				}, function() {
					vm.categories = QuizService.categories;
				}, true)
				$scope.$watch(function () {
					return vm.categories;
				}, function() {
					QuizService.categories = vm.categories;
				}, true)
			}

			function add() {
				if (vm.category && vm.categories.indexOf(vm.category) ===-1){
					vm.categories.push(vm.category);
					vm.category = null;
				}
			}	

			function remove(index) {
				vm.categories.splice(index, 1);
			}
		}
})();