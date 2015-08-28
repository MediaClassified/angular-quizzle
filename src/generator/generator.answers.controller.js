(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorAnswersController', GeneratorAnswersController);

		function GeneratorAnswersController ($scope, QuizService) {
			var vm = this;
			vm.questions = [];
			vm.categories = [];

			activate();
			/////////

			function activate () {
				$scope.$watch(function () {
					return QuizService;
				}, function() {
					vm.questions = QuizService.quiz;
					vm.categories = QuizService.categories;
				}, true)
				$scope.$watch(function () {
					return vm.questions;
				}, function() {
					QuizService.quiz = vm.questions;
				}, true)
			}
		}
})();