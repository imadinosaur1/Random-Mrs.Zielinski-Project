function createLessonScreen({
  title,
  dialogue,
  equation,
  takeaway,
  graph,
  topicId,
  nextSceneId
}) {
  const screen = Utils.createElement("main", "scene");
  screen.appendChild(Utils.createElement("h1", "", title));

  dialogue.forEach(turn => {
    const row = Utils.createElement("div", "dialogue-turn");
    row.appendChild(Sprites[turn.speaker](turn.mood || "happy"));

    const bubble = Utils.createElement("div", "speech-bubble");
    bubble.appendChild(Utils.createElement("p", "", turn.text));
    row.appendChild(bubble);
    screen.appendChild(row);
  });

  screen.appendChild(createParabolaComparison(graph));

  const example = Utils.createElement("section", "math-example");
  example.appendChild(Utils.createElement("h2", "", equation));
  example.appendChild(Utils.createElement("p", "", takeaway));
  screen.appendChild(example);

  const buttonText = topicId ? "Back to topic choices" : "Choose a topic";
  const button = Utils.createElement("button", "button", buttonText);

  button.addEventListener("click", () => {
    if (topicId) {
      Router.completeTopic(topicId);
    } else {
      Router.navigate(nextSceneId);
    }
  });

  screen.appendChild(button);
  return screen;
}