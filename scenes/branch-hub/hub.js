const topics = [
  {
    id: "horizontal",
    title: "Slide left or right",
    description: "Learn how the number by x moves the graph.",
    sceneId: "horizontal"
  },
  {
    id: "vertical",
    title: "Slide up or down",
    description: "Learn how the number at the end moves the graph.",
    sceneId: "vertical"
  },
  {
    id: "stretch",
    title: "Make it narrower",
    description: "See how a bigger number changes the U-shape.",
    sceneId: "stretch"
  },
  {
    id: "compression",
    title: "Make it wider",
    description: "See how a number between 0 and 1 changes the U-shape.",
    sceneId: "compression"
  },
  {
    id: "reflection",
    title: "Flip it upside down",
    description: "Learn what a negative number in front does.",
    sceneId: "reflection"
  },
  {
    id: "vertex-form",
    title: "Meet vertex form",
    description: "Learn what a, h, and k do in the parabola rule.",
    sceneId: "vertex-form"
  },

];

Engine.register("hub", () => {
  const screen = Utils.createElement("main", "scene scene--hub");

  screen.appendChild(
    Utils.createElement("h1", "", "Where should we explore next?")
  );

  const dialogue = [
    {
      speaker: "joel",
      mood: "happy",
      text: "Welcome to Parabola Park! Each card is a math adventure."
    },
    {
      speaker: "michael",
      mood: "happy",
      text: "Pick any topic you like. We’ll explain it and show how the graph changes."
    }
  ];

  dialogue.forEach(turn => {
    const row = Utils.createElement("div", "dialogue-turn");
    row.appendChild(Sprites[turn.speaker](turn.mood));

    const bubble = Utils.createElement("div", "speech-bubble");
    bubble.appendChild(Utils.createElement("p", "", turn.text));

    row.appendChild(bubble);
    screen.appendChild(row);
  });

  const cardList = Utils.createElement("div", "choice-card-list");

  topics.forEach(topic => {
    cardList.appendChild(createChoiceCard(topic));
  });

  screen.appendChild(cardList);

  if (State.allTopicsComplete()) {
    const finalButton = Utils.createElement(
      "button",
      "button button--final",
      "Start the Final Challenge"
    );

    finalButton.addEventListener("click", () => {
      Router.navigate("outro");
    });

    screen.appendChild(finalButton);
  }

  return screen;
});