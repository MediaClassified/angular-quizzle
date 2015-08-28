# Quizzle Styling

Add a wrapper to contain the Quizzle directive and customize the size of the quiz:

    <div class="wrapper">
        <quizzle></quizzle>
    </div>

    .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
    }

## Classes

The following classes can be customized:

    .quizzle-container
      .quizzle-slide
        .quizzle-question
          .quizzle-question-content
            .quizzle-question-text
            .quizzle-question-img
        .quizzle-answer-container
          .quizzle-answer (.quizzle-answer-left | .quizzle-answer-right)
            .quizzle-answer-content
              .quizzle-answer-text
              .quizzle-answer-img
      .quizzle-done
        .quizzle-done-message
          .quizzle-done-content
            .quizzle-done-text
        .quizzle-done-actions
          .quizzle-repeat-link

To modify the animations, override these [ngAnimate](https://docs.angularjs.org/api/ngAnimate) classes:

    .quizzle-slide-left.quizzle-slide-left-add
    .quizzle-slide-left.quizzle-slide-left-add-active
    .quizzle-slide-right.quizzle-slide-right-add
    .quizzle-slide-right.quizzle-slide-right-add-active