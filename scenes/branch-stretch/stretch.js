Engine.register("stretch", () => createLessonScreen({
  title: "Make the U narrower",
   dialogue: [
    {
      speaker: "michael",
      text: "The a in vertex form changes how wide or narrow the U-shape is."
    },
    {
      speaker: "joel",
      text: "When a is bigger than 1, the parabola gets narrower. Here a is 2."
    }
  ],
  equation: "y = 2x²",
  takeaway: "Because 2 is bigger than 1, the purple graph is narrower.",
  graph: { a: 2, h: 0, k: 0 },
  topicId: "stretch"
}));