Engine.register("reflection", () => createLessonScreen({
  title: "Flip it upside down",
  dialogue: [
    {
      speaker: "michael",
      text: "A minus sign in front flips the parabola over the x-axis."
    },
    {
      speaker: "joel",
      text: "The U opens down instead of up. The vertex stays in the same place."
    }
  ],
  equation: "y = -x²",
  takeaway: "The purple graph is the starting graph flipped upside down.",
  graph: { a: -1, h: 0, k: 0 },
  topicId: "reflection"
}));

// Reflection: y = -x²
createParabolaComparison({ a: -1, h: 0, k: 0 });

continueButton.addEventListener("click", () => {
  Router.completeTopic("reflection");
});