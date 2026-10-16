Engine.register("intro", () => createLessonScreen({
  title: "Welcome to Parabola Park!",
  dialogue: [
    {
      speaker: "joel",
      text: "This U-shaped graph is called a parabola. It starts as y = x²."
    },
    {
      speaker: "michael",
      text: "We can slide it, make it wider or narrower, and even flip it upside down!"
    }
  ],
  equation: "Starting graph: y = x²",
  takeaway: "Choose a topic to explore. You can visit them in any order.",
  graph: { a: 1, h: 0, k: 0 },
  nextSceneId: "hub"
}));