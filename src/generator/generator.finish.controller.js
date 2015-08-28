(function () {
	'use strict';

	angular
		.module('core')
		.controller('GeneratorFinishController', GeneratorFinishController);

		function GeneratorFinishController ($scope, QuizService, $location) {
			var vm = this;
			vm.json = null;
			vm.save = save;
			vm.clear = clear;

			activate();
			////////////

			function activate () {
				$scope.$watch(function () {
					return QuizService.quiz;
				}, function(quiz) {
					vm.quiz = quiz;
				}, true)
			}

			function save () {
				vm.json = angular.toJson(vm.quiz, true);
				// var blob = new Blob([ quiz ], { type : 'text/plain' });
				// var url = (window.URL || window.webkitURL).createObjectURL( blob );
				// vm.url = url;
				// console.log(url)
				// console.log(blob)
				//$location.url(url);
			}

			function clear () {
				QuizService.quiz = [];
				QuizService.categories = [];
				vm.json = null;
			}
		}
})();