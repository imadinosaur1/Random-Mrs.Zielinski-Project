Engine.register("outro", () => {
  const screen = Utils.createElement("main", "scene");
  let questionIndex = 0;
  let score = 0;

  const questions = [
    {
      text: "In y = (x - 4)², which way does the graph move?",
      choices: ["Right 4", "Left 4", "Up 4"],
      answer: 0,
      explanation: "x - 4 moves the graph right 4."
    },
    {
      text: "In y = x² - 3, which way does the graph move?",
      choices: ["Up 3", "Down 3", "Right 3"],
      answer: 1,
      explanation: "Subtracting 3 at the end moves the graph down 3."
    },
    {
      text: "What does y = 3x² do to the U-shape?",
      choices: ["Makes it narrower", "Makes it wider", "Flips it down"],
      answer: 0,
      explanation: "3 is bigger than 1, so the graph gets narrower."
    },
    {
      text: "What does y = 0.5x² do to the U-shape?",
      choices: ["Makes it narrower", "Makes it wider", "Moves it right"],
      answer: 1,
      explanation: "0.5 is between 0 and 1, so the graph gets wider."
    },
    {
      text: "Which way does y = -x² open?",
      choices: ["Up", "Down", "Sideways"],
      answer: 1,
      explanation: "The minus sign flips the parabola so it opens down."
    }
  ];

  function showQuestion() {
    screen.replaceChildren();

    if (questionIndex >= questions.length) {
      screen.appendChild(Sprites.both("happy", "happy"));
      screen.appendChild(Utils.createElement("h1", "", "Great exploring!"));
      screen.appendChild(
        Utils.createElement("p", "", `You got ${score} out of ${questions.length} questions right.`)
      );
      screen.appendChild(
        Utils.createElement("p", "", "You learned how parabolas slide, change width, and flip.")
      );
      return;
    }

    const question = questions[questionIndex];
    screen.appendChild(Utils.createElement("h1", "", `Final Challenge: ${questionIndex + 1} of ${questions.length}`));
    screen.appendChild(Utils.createElement("p", "", question.text));

    const feedback = Utils.createElement("p", "answer-feedback");
    const nextButton = Utils.createElement("button", "button", "Next question");
    nextButton.hidden = true;
    nextButton.addEventListener("click", () => {
      questionIndex += 1;
      showQuestion();
    });

    question.choices.forEach((choice, choiceIndex) => {
      const answerButton = Utils.createElement("button", "answer-choice", choice);

      answerButton.addEventListener("click", () => {
        screen.querySelectorAll(".answer-choice").forEach(button => {
          button.disabled = true;
        });

        if (choiceIndex === question.answer) {
          score += 1;
          feedback.textContent = `That's right! ${question.explanation}`;
        } else {
          feedback.textContent = question.explanation;
        }

        nextButton.hidden = false;
      });

      screen.appendChild(answerButton);
    });

    screen.appendChild(feedback);
    screen.appendChild(nextButton);
  }

  showQuestion();
  return screen;
});