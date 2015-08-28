(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorQuestionsController', GeneratorQuestionsController);

		function GeneratorQuestionsController ($scope, QuizService) {
			var vm = this;

			vm.questions = [];
			vm.question = {};
			vm.add = add;
			vm.remove = remove;

			activate();
			//////////////////


			function activate() {
				$scope.$watch(function () {
					return QuizService.quiz;
				}, function() {
					vm.questions = QuizService.quiz;
				}, true)
				$scope.$watch(function () {
					return vm.questions;
				}, function() {
					QuizService.quiz = vm.questions;
				}, true)
			}

			function add() {
				if (vm.question.text) {
					vm.question.answer = {
						left: {},
						right: {}
					};
					vm.questions.push(vm.question);
					vm.question = {};
				}
			}	

			function remove(index) {
				vm.questions.splice(index, 1);
			}
		}
})();