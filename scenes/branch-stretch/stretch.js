Engine.register("stretch", () => createLessonScreen({
  title: "Make the U narrower",
  dialogue: [
    {
      speaker: "michael",
      text: "A number bigger than 1 in front pulls the sides of the U inward."
    },
    {
      speaker: "joel",
      text: "That makes the parabola skinnier. Here, the number is 2."
    }
  ],
  equation: "y = 2x²",
  takeaway: "Because 2 is bigger than 1, the purple graph is narrower.",
  graph: { a: 2, h: 0, k: 0 },
  topicId: "stretch"
}));

// Stretch: y = 2x²
createParabolaComparison({ a: 2, h: 0, k: 0 });

continueButton.addEventListener("click", () => {
  Router.completeTopic("stretch");
});