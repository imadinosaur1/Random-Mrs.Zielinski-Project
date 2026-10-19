Engine.register("compression", () => createLessonScreen({
  title: "Make the U wider",
    dialogue: [
    {
      speaker: "joel",
      text: "The a in vertex form can also make the U-shape wider."
    },
    {
      speaker: "michael",
      text: "When a is between 0 and 1, the parabola gets wider. For example, a = 0.5 makes a wide U."
    }
  ],
  equation: "y = 0.5x²",
  takeaway: "Because 0.5 is between 0 and 1, the purple graph is wider.",
  graph: { a: 0.5, h: 0, k: 0 },
  topicId: "compression"
}));