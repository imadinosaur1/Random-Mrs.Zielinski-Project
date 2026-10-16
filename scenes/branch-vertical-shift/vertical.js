Engine.register("vertical", () => createLessonScreen({
  title: "Slide up or down",
  dialogue: [
    {
      speaker: "joel",
      text: "A number at the very end moves the whole graph up or down."
    },
    {
      speaker: "michael",
      text: "Add 2 to move up 2. Subtract 2 to move down 2."
    }
  ],
  equation: "y = x² + 2",
  takeaway: "The purple graph moved up 2 spaces.",
  graph: { a: 1, h: 0, k: 2 },
  topicId: "vertical"
}));