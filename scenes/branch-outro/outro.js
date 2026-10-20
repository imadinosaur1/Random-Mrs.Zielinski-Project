Engine.register("outro", () => {
  const questions = [
    {
      prompt: "In y = (x - 3)², which way does the graph move?",
      answers: ["Right 3 units", "Left 3 units", "Up 3 units"],
      correct: 0,
      explanation:
        "The number inside the brackets moves the graph sideways. (x - 3)² shifts it right 3 units."
    },
    {
      prompt: "In y = x² + 2, which way does the graph move?",
      answers: ["Down 2 units", "Up 2 units", "Right 2 units"],
      correct: 1,
      explanation:
        "The number added outside x² moves the graph up or down. Adding 2 shifts it up 2 units."
    },
    {
      prompt: "What does the 2 in y = 2x² do?",
      answers: [
        "Makes the graph narrower",
        "Moves it right",
        "Flips it upside down"
      ],
      correct: 0,
      explanation:
        "A number bigger than 1 in front of x² makes the parabola narrower."
    },
    {
      prompt: "What does the negative sign in y = -x² do?",
      answers: [
        "Moves it down 1 unit",
        "Makes it wider",
        "Flips it upside down"
      ],
      correct: 2,
      explanation:
        "A negative number in front of x² flips the parabola upside down."
    },
     {
      prompt: "Which equation is written in vertex form?",
      answers: [
        "y = 2(x - 1)² + 3",
        "y = 2x + 3",
        "y = x² + 1"
      ],
      correct: 0,
      explanation:
        "Vertex form looks like y = a(x - h)² + k. The squared parentheses and the numbers around them help show how the parabola changes."
    },
    {
      prompt: "In y = 2(x - 1)² + 3, what are a, h, and k?",
      answers: [
        "a = 2, h = 1, k = 3",
        "a = 1, h = 2, k = 3",
        "a = 3, h = 1, k = 2"
      ],
      correct: 0,
      explanation:
        "In y = a(x - h)² + k, a is in front of the parentheses, h is inside the parentheses, and k is at the end."
    },
    {
      prompt: "In y = (x + 4)² - 2, what are h and k?",
      answers: [
        "h = 4, k = 2",
        "h = -4, k = -2",
        "h = -2, k = 4"
      ],
      correct: 1,
      explanation:
        "The plus 4 inside the parentheses means h = -4, because the sign inside works backward. The -2 at the end means k = -2."
    },
      {
      prompt: "Compare the purple graph with the dashed gray parent graph. What changed?",
      graph: { a: 1, h: 2, k: 0 },
      answers: [
        "It moved right 2 units",
        "It moved up 2 units",
        "It became narrower"
      ],
      correct: 0,
      explanation:
        "The purple graph moved right 2 units. The h value is 2."
    },
    {
      prompt: "What happened to the purple graph?",
      graph: { a: 1, h: 0, k: -3 },
      answers: [
        "It moved down 3 units",
        "It moved left 3 units",
        "It flipped upside down"
      ],
      correct: 0,
      explanation:
        "The purple graph moved down 3 units. The k value is -3."
    },
    {
      prompt: "How is the purple graph different from the dashed gray parent graph?",
      graph: { a: 2, h: 0, k: 0 },
      answers: [
        "It is narrower",
        "It is wider",
        "It moved right 2 units"
      ],
      correct: 0,
      explanation:
        "The purple graph is narrower because a = 2, which is bigger than 1."
    },
      {
      prompt: "Which vertical line would split this parabola into two matching halves?",
      graph: { a: 1, h: 2, k: 0, showAxisOfSymmetry: true },
      answers: ["x = 2", "x = 0", "y = 2"],
      correct: 0,
      explanation:
        "The axis of symmetry goes through the vertex. This parabola’s vertex is at x = 2, so its axis is x = 2."
    },
    {
      prompt: "Look at the graph. What is its axis of symmetry?",
     graph: { a: 2, h: -3, k: -1, showAxisOfSymmetry: true },
      answers: ["x = 3", "x = -3", "y = -1"],
      correct: 1,
      explanation:
        "The axis is x = h. Here h = -3, so the axis of symmetry is x = -3."
    },
    {
      prompt: "In vertex form, y = a(x - h)² + k, what is the axis of symmetry?",
      answers: ["x = h", "y = k", "x = a"],
      correct: 0,
      explanation:
        "The axis of symmetry is the vertical line x = h. It passes through the vertex and divides the parabola into two matching sides."
    }
  ];

  let questionIndex = 0;
  let score = 0;
  let showingResults = false;

  const screen = Utils.createElement("main", "scene scene--outro");
  const title = Utils.createElement("h1", "", "Final Challenge");
  const prompt = Utils.createElement("p", "challenge__prompt");
  const answers = Utils.createElement("div", "challenge__answers");
  const feedback = Utils.createElement("p", "challenge__feedback");
  const nextButton = Utils.createElement("button", "button", "Next question");
  const questionGraph = Utils.createElement("div", "challenge__graph");

  screen.append(title, prompt, answers, feedback, nextButton, questionGraph);

  function showQuestion() {
    const question = questions[questionIndex];

    prompt.textContent =
      `Question ${questionIndex + 1} of ${questions.length}: ${question.prompt}`;
    answers.replaceChildren();
    questionGraph.replaceChildren();
    if (question.graph) {
  questionGraph.appendChild(createParabolaComparison(question.graph));
}
    feedback.textContent = "";
    nextButton.hidden = true;

    question.answers.forEach((answer, index) => {
      const answerButton = Utils.createElement(
        "button",
        "answer-choice",
        answer
      );

      answerButton.addEventListener("click", () => {
        answers.querySelectorAll("button").forEach(item => {
          item.disabled = true;
        });

        if (index === question.correct) {
          score += 1;
          feedback.textContent = `Great job! ${question.explanation}`;
        } else {
          feedback.textContent =
            `Good try! The answer is “${question.answers[question.correct]}.” ` +
            question.explanation;
        }

        nextButton.textContent =
          questionIndex === questions.length - 1
            ? "See your results"
            : "Next question";
        nextButton.hidden = false;
      });

      answers.appendChild(answerButton);
    });
  }

  nextButton.addEventListener("click", () => {
    if (showingResults) {
      Router.navigate("hub");
      return;
    }

    if (questionIndex === questions.length - 1) {
      showingResults = true;
      title.textContent = "Challenge complete!";
      prompt.textContent = `You scored ${score} out of ${questions.length}.`;
      answers.replaceChildren();
      feedback.textContent =
        score === questions.length
          ? "Amazing work—you mastered these transformations! You can revisit any topic."
          : "Nice work exploring transformations! You can revisit any topic and practice more.";
      nextButton.textContent = "Return to the hub";
      return;
    }

    questionIndex += 1;
    showQuestion();
  });

  showQuestion();
  return screen;
});