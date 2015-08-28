# Quizzle
Quizzle is an open source Angular module for simple animated true/false quizzes. It allows you to compose question and answer pairs via a formatted JSON object. Options for image embedding are also available. Take a look at [Quizzle in action] (http://mediaclassified.github.io/angular-quizzle/).

Try out Quizzle, it'll make yo site sizzle fo shizzle!


## Getting Started

1. Install Quizzle via Bower or [download the latest zip]().

  ```
  bower install angular-quizzle --save
  ```
2. Include [AngularJS](https://angularjs.org/) in your project.

  ```
  <script src="/path/to/angular/angular.min.js"></script>
  ```
3. Include Quizzle and its dependencies.

  ```
  <script src="/path/to/angular-animate/angular-animate.min.js"></script>
  <script src="/path/to/angular-touch/angular-touch.min.js"></script>
  <script src="/path/to/angular-quizzle/dist/quizzle.js"></script>
  <link rel="stylesheet" href="/path/to/angular-quizzle/dist/quizzle.css"/>
  ```
4. Load the module in your application by including it as a dependency.
  
  ```
  angular.module('app', ['quizzle']);
  ```
5. [Generate a quiz]() or create your own. If you create your own quiz, be sure to [follow the guidelines]().
6. Include the Quizzle directive in your HTML with your quiz object.
  
  ```
  <quizzle quiz="{your-quiz-object-here}" repeat="true" ></quizzle>
  ```

## Examples

A quiz consists of an array of question objects. For example:

  ```
  [
    {
      text: "My Quizzle Question",
      img: "link/to/image",
      answer: {
        left: {
          text: "False",
          img: "link/to/image",
          categories: [ 'category1', 'category2' ]
        },
        right: {
          text: "True",
          img: "link/to/image",
          categories: [ 'category3', 'category4' ]
        }
      }
    }
  ]
  ```
  
_Properties:_
- **text**: Required. The question string.
- **img**: URL to the image.
- **answer**: Required. An object with `left` and `right` properties.
- **categories**: An array of strings to which the answers refer. 

Setting the `quiz` attribute:

  ```
  <quizzle 
      quiz="{your-quiz-object-here}"
      repeat="true" 
      startOn="readyToStart" 
      onFinish="computeResults">
  </quizzle>
  ```
  
_Attributes:_
- **quiz**: Required. Takes in an array of JSON objects.
- **repeat**: Allows replaying the quiz.
- **startOn**: Value that starts the quiz when resolves to true.
- **onFinish**: A function that takes in an object of quiz results.


## Contributors

- Matthew Weeks ([weeksling](https://github.com/weeksling))
- Iris Ng ([irislyng](https://github.com/irislyng))
- Harit Patel ([ptlharit](https://github.com/ptlharit))
- Jen Tran ([jyntran](https://github.com/jyntran))
