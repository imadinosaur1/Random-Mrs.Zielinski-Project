Engine.register("vertical", () => createLessonScreen({
  title: "Slide up or down",
   dialogue: [
    {
      speaker: "joel",
      text: "The k in vertex form tells us how far the graph slides up or down."
    },
    {
      speaker: "michael",
      text: "In y = x² + 2, k is 2, so the graph slides up 2 spaces. Subtracting 2 would slide it down."
    }
  ],
  equation: "y = x² + 2",
  takeaway: "The purple graph moved up 2 spaces.",
  graph: { a: 1, h: 0, k: 2 },
  topicId: "vertical"
}));