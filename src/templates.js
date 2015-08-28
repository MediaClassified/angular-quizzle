angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("quizzle.template.html","<div class=\"quizzle-container\" ng-if=\"vm.activate\">\r\n    <div class=\"quizzle-slide\" ng-repeat=\"slide in vm.quiz\" ng-class=\"{\'quizzle-slide-current\':vm.index == $index, \'quizzle-slide-left\': vm.answered[$index] == \'left\', \'quizzle-slide-right\': vm.answered[$index] == \'right\'}\" ng-if=\"!vm.isAnswered($index)\" ng-swipe-left=\"vm.answerQuestion(vm.left, \'left\', $index)\" ng-swipe-right=\"vm.answerQuestion(vm.right, \'right\', $index)\">\r\n        <div class=\"quizzle-question\">\r\n            <div class=\"quizzle-question-content\">\r\n                <span class=\"quizzle-question-text\">{{slide.text}}</span>\r\n                <img class=\"quizzle-question-img\" ng-class=\"{\'hide\': !slide.img}\" ng-src=\"{{slide.img}}\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"quizzle-answer-container\" ng-class=\"{\'hide\': !slide.answer}\">\r\n            <div class=\"quizzle-answer quizzle-answer-left\" ng-click=\"vm.answerQuestion(vm.left, \'left\', $index)\"> \r\n                <div class=\"quizzle-answer-content\">\r\n                    <span class=\"quizzle-answer-text\">{{slide.answer.left.text}}</span>\r\n                    <img class=\"quizzle-answer-img\" ng-src=\"{{slide.answer.left.img}}\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"quizzle-answer quizzle-answer-right\"  ng-click=\"vm.answerQuestion(vm.right, \'right\', $index)\">\r\n                <div class=\"quizzle-answer-content\">\r\n                    <span class=\"quizzle-answer-text\">{{slide.answer.right.text}}</span>\r\n                    <img class=\"quizzle-answer-img\" ng-src=\"{{slide.answer.right.img}}\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"quizzle-slide quizzle-done\" ng-if=\"vm.checkDone()\">\r\n        <div class=\"quizzle-question quizzle-done-message\">\r\n            <div class=\"quizzle-question-content quizzle-done-content\">\r\n                <span class=\"quizzle-question-text quizzle-done-text\">{{vm.current.text}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"quizzle-answer-container quizzle-done-actions\" ng-if=\"vm.repeat\" ng-class=\"{\'hide\': vm.current.answer}\">\r\n            <a class=\"quizzle-repeat-link\" ng-click=\"vm.resetQuiz()\">Click here to take the quiz again.</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");}]);