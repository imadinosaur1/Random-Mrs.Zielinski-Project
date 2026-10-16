Engine.register("horizontal", () => createLessonScreen({
  title: "Slide left or right",
  dialogue: [
    {
      speaker: "michael",
      text: "Look inside the parentheses. In (x - 3)², the graph slides right 3 spaces."
    },
    {
      speaker: "joel",
      text: "If it says (x + 3)², it slides left 3 spaces. The sign feels backward!"
    }
  ],
  equation: "y = (x - 3)²",
  takeaway: "The purple graph moved right 3 spaces.",
  graph: { a: 1, h: 3, k: 0 },
  topicId: "horizontal"
}));