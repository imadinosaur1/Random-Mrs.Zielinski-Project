Engine.register("reflection", () => createLessonScreen({
  title: "Flip it upside down",
   dialogue: [
    {
      speaker: "michael",
      text: "The a in vertex form also controls which way the parabola opens."
    },
    {
      speaker: "joel",
      text: "When a is negative, the parabola flips upside down. Here, a = -1."
    }
  ],
  equation: "y = -x²",
  takeaway: "The purple graph is the starting graph flipped upside down.",
  graph: { a: -1, h: 0, k: 0 },
  topicId: "reflection"
}));