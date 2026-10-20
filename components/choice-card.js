function createChoiceCard(topic) {
  const card = Utils.createElement("button", "choice-card");
  card.type = "button";
    const isNewCombine =
    topic.id === "combine" && !State.isTopicComplete(topic.id);

  if (isNewCombine) {
    card.classList.add("choice-card--new");
    card.appendChild(
      Utils.createElement("span", "choice-card__new", "NEW!")
    );
  }

  const title = Utils.createElement("strong", "choice-card__title", topic.title);
  const description = Utils.createElement(
    "span",
    "choice-card__description",
    topic.description
  );

  card.append(title, description);

  if (State.isTopicComplete(topic.id)) {
    const completeLabel = Utils.createElement(
      "span",
      "choice-card__complete",
      "Completed ✓"
    );
    card.appendChild(completeLabel);
  }

  card.addEventListener("click", () => {
    Router.navigate(topic.sceneId);
  });

  return card;
}