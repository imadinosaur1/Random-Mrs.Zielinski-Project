Engine.register("intro", () => {
  const screen = Utils.createElement("main", "scene scene--intro");

  screen.appendChild(
    Utils.createElement("h1", "", "Welcome to Parabola Park!")
  );

  const dialogue = [
    {
      speaker: "joel",
      text: "Welcome to the park! Each ride will help you explore how parabolas change."
    },
    {
      speaker: "michael",
      text: "Let’s start with the Vertex Form ride. It will show us what a, h, and k do."
    }
  ];

  dialogue.forEach(turn => {
    const row = Utils.createElement("div", "dialogue-turn");
    row.appendChild(Sprites[turn.speaker](turn.mood || "happy"));

    const bubble = Utils.createElement("div", "speech-bubble");
    bubble.appendChild(Utils.createElement("p", "", turn.text));

    row.append(bubble);
    screen.appendChild(row);
  });

  const startButton = Utils.createElement(
    "button",
    "button",
    "Go to the Vertex Form ride"
  );

  startButton.addEventListener("click", () => {
    Router.navigate("vertex-form");
  });

  screen.appendChild(startButton);
  return screen;
});