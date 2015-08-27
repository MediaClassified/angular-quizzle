(function () {
	angular
		.module('demo')
		.controller('DemoController', DemoController);

		function DemoController ($timeout, $http) {
			var vm = this;
			vm.quiz = {
				[
					{
						"text": "Are you older than 10?",
						"answer": {
							"left": {
								"categories": ["category 1", "category 2"],
								"text": "Yes",
								"img": "http://lorempixel.com/50/50/food"
							},
							"right": {
								"categories": ["category 3", "category 4"],
								"text": "No",
								"img": "http://lorempixel.com/50/50/cats"
							}
						},
						"img": "http://lorempixel.com/400/200/cats"
					},
					{
						"text": "Are you younger than 10?",
						"answer": {
							"left": {
								"categories": ["category 3", "category 2"],
								"text": "No",
								"img": ""
							},
							"right": {
								"categories": ["category 4", "category 2"],
								"text": "Yes",
								"img": ""
							}
						},
						"img": ""
					}
				]
			}
		}
})();