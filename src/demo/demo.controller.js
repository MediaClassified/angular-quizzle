(function () {
	angular
		.module('core')
		.controller('DemoController', DemoController);

		function DemoController () {
			var vm = this;
			vm.start = false;


			vm.quiz = [
				{
				    "text": "Do you have a fear of heights?",
				    "img": "",
				    "answer": {
				        "left": {
				            "text": "",
				            "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
				            "categories": [
				                
				            ]
				        },
				        "right": {
				            "text": "",
				            "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
				            "categories": [
				                
				            ]
				        }
				    }
				},
			    {
			        "text": "Do you have a shirt that says I am with stupid on it?",
			        "img": "http://rlv.zcache.com/im_with_stupid_tshirt-r075732436619472b8785e89b90ea6fcb_va6lr_324.jpg",
			        "answer": {
			            "left": {
			                "text": "",
			                "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
			                "categories": [
			                    
			                ]
			            },
			            "right": {
			                "text": "",
			                "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
			                "categories": [
			                    
			                ]
			            }
			        }
			    },
			    {
			        "text": "Did you ever sneeze out milk from laughing too hard?",
			        "img": "",
			        "answer": {
			            "left": {
			                "text": "",
			                "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
			                "categories": [
			                    
			                ]
			            },
			            "right": {
			                "text": "",
			                "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
			                "categories": [
			                    
			                ]
			            }
			        }
			    },
			    {
			        "text": "Have you faked it, until you made it?",
			        "img": "",
			        "answer": {
			            "left": {
			                "text": "",
			                "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
			         		"categories": []
				      	},
				      	"right": {
					        "text": "",
					        "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
					        "categories": []
				        }
			    	}
			  	},
				{
					"text": "Have you ever held a snake?",
					"img": "",
					"answer": {
						  "left": {
						    "text": "", 
						    "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
						     "categories": []
						  },
						  "right": {
						    "text": "",
						    "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
						     "categories": []
					  	}	
					}
				},
				{
					"text": "Do you think you are better looking than your friends?",
					"img": "",
					"answer": {
					  	"left": {
						    "text": "", 
						    "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
						     "categories": []
						  },
					  "right": {
						    "text": "",
						    "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
						    "categories": []
						}
					}
				},
				{
					"text": "Have you puked on an amusement ride?",
					"img": "",
					"answer": {
					  	"left": {
					    	"text": "", 
					    	"img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
					     	"categories": []
					  	},
					  	"right": {
						    "text": "",
						    "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
						    "categories": []
						}
					}
				},
				{
					"text": "Be honest, do you like Quizzle?",
					"img": "",
					"answer": {
					  	"left": {
						    "text": "", 
						    "img": "http://www.clker.com/cliparts/R/x/l/9/v/h/x-mark-red-md.png",
						    "categories": []
					  	},
					  	"right": {
						    "text": "",
						    "img": "http://www.clker.com/cliparts/j/c/3/L/U/Y/light-green-check-mark-md.png",
						    "categories": []
						 }
					}
				}
			];
		}
})();