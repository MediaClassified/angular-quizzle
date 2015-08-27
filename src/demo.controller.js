(function () {
	angular
		.module('demo')
		.controller('DemoController', DemoController);

		function DemoController () {
			var vm = this;
			vm.start = false;


			vm.quiz = [
					{
						"text": "Do you like Quizzle?",
						"answer": {
							"left": {
								"categories": ["yes"],
								"text": "Yes",
								"img": ""
							},
							"right": {
								"categories": ["no"],
								"text": "No",
								"img": ""
							}
						},
						"img": ""
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
				];
		}
})();