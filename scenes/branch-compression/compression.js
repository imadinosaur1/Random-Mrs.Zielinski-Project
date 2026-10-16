Engine.register("compression", () => createLessonScreen({
  title: "Make the U wider",
  dialogue: [
    {
      speaker: "joel",
      text: "A number between 0 and 1 in front lets the sides spread out."
    },
    {
      speaker: "michael",
      text: "That makes the parabola wider. Here, one-half is between 0 and 1."
    }
  ],
  equation: "y = 0.5x²",
  takeaway: "Because 0.5 is between 0 and 1, the purple graph is wider.",
  graph: { a: 0.5, h: 0, k: 0 },
  topicId: "compression"
}));