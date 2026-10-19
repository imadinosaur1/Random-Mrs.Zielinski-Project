Engine.register("outro", () => {
  const questions = [
    {
      prompt: "In y = (x - 3)², which way does the graph move?",
      answers: [
        "Right 3 units",
        "Left 3 units",
        "Up 3 units"
      ],
      correct: 0,
      explanation: "You got it! The number inside the brackets moves the graph sideways. (x - 3)² shifts it right 3 units."
    },
    {
      prompt: "In y = x² + 2, which way does the graph move?",
      answers: [
        "Down 2 units",
        "Up 2 units",
        "Right 2 units"
      ],
      correct: 1,
      explanation: "Exactly! The number added outside x² moves the graph up or down. Adding 2 shifts it up 2 units."
    },
    {
      prompt: "What does the 2 in y = 2x² do?",
      answers: [
        "Makes the graph narrower",
        "Moves it right",
        "Flips it upside down"
      ],
      correct: 0,
      explanation: "That’s right! A number bigger than 1 in front of x² makes the parabola narrower."
    },
    {
      prompt: "What does the negative sign in y = -x² do?",
      answers: [
        "Moves it down 1 unit",
        "Makes it wider",
        "Flips it upside down"
      ],
      correct: 2,
      explanation: "Correct! A negative number in front of x² flips the parabola upside down."
    }
  ];

  let questionIndex = 0;
  let score = 0;

  const screen = Utils.createElement("main", "scene scene--outro");
  const title = Utils.createElement("h1", "", "Final Challenge");
  const prompt = Utils.createElement("p", "challenge__prompt");
  const answers = Utils.createElement("div", "challenge__answers");
  const feedback = Utils.createElement("p", "challenge__feedback");
  const nextButton = Utils.createElement("button", "button", "Next question");

  screen.append(title, prompt, answers, feedback);
  nextButton.hidden = true;
  screen.appendChild(nextButton);

  function showQuestion() {
    const question = questions[questionIndex];

    prompt.textContent = `Question ${questionIndex + 1} of ${questions.length}: ${question.prompt}`;
    answers.replaceChildren();
    feedback.textContent = "";
    nextButton.hidden = true;

    question.answers.forEach((answer, index) => {
      const button = Utils.createElement("button", "answer-choice", answer);

      button.addEventListener("click", () => {
        answers.querySelectorAll("button").forEach(item => {
          item.disabled = true;
        });

        if (index === question.correct) {
          score += 1;
          feedback.textContent = `Great job! ${question.explanation}`;
        } else {
          feedback.textContent =
            `Good try! The answer is “${question.answers[question.correct]}.” ${question.explanation}`;
        }

          if (questionIndex === questions.length - 1) {
          nextButton.textContent = "See your results";
        } else {
          nextButton.textContent = "Next question";
        }

        nextButton.hidden = false;
      });

      answers.appendChild(button);
    });
  }

         button.addEventListener("click", () => {
        answers.querySelectorAll("button").forEach(item => {
          item.disabled = true;
        });

        if (index === question.correct) {
          score += 1;
          feedback.textContent = `Great job! ${question.explanation}`;
        } else {
          feedback.textContent =
            `Good try! The answer is “${question.answers[question.correct]}.” ${question.explanation}`;
        }

        const isLastQuestion = questionIndex === questions.length - 1;

        nextButton.textContent = isLastQuestion
          ? "See your results"
          : "Next question";

        nextButton.hidden = false;
      });

  showQuestion();
  return screen;
});