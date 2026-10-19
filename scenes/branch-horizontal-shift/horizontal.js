Engine.register("horizontal", () => createLessonScreen({
  title: "Slide left or right",
   dialogue: [
    {
      speaker: "michael",
      text: "The h in vertex form tells us how far the graph slides left or right."
    },
    {
      speaker: "joel",
      text: "In y = (x - 3)², h is 3, so the graph slides right 3 spaces. The minus sign inside the brackets can feel backward!"
    }
  ],
  equation: "y = (x - 3)²",
  takeaway: "The purple graph moved right 3 spaces.",
  graph: { a: 1, h: 3, k: 0 },
  topicId: "horizontal"
}));