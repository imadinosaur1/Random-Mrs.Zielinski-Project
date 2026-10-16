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
  }
];

Engine.register("hub", () => {
  const screen = Utils.createElement("main", "scene scene--hub");
  screen.appendChild(
    Utils.createElement("h1", "", "Where should we explore next?")
  );
  screen.appendChild(
    Utils.createElement("p", "", "Choose a topic. You can come back here anytime.")
  );

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