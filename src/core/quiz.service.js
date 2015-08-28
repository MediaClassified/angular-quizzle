(function() {
	'use strict';	

	angular
		.module('core')
		.factory('QuizService', QuizService);

		function QuizService () {
			var service = {
				quiz: [],
				categories: [],
				storeQuiz: storeQuiz,
				getQuiz: getQuiz
			};

			return service;

			function storeQuiz (quiz) {
				return service.quiz = quiz;
			}

			function getQuiz () {
				return service.quiz;
			}
		}
})();