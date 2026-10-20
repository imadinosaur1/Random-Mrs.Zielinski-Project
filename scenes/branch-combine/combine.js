Engine.register("combine", () => createLessonScreen({
  title: "Put it all together",
  dialogue: [
    {
      speaker: "joel",
      text: "Let’s read this equation together: y = 2(x - 1)² + 3."
    },
    {
      speaker: "michael",
      text: "The a is 2, so the parabola gets narrower. The h is 1, so it slides right 1."
    },
    {
      speaker: "joel",
      text: "The k is 3, so it slides up 3. That puts the vertex at (1, 3)!"
    },
      {
      speaker: "joel",
      text: "The vertex is (1, 3). The axis of symmetry is x = 1, the line through the vertex that splits the parabola into two matching sides."
    },
    {
      speaker: "michael",
      text: "Look at the graph: all three changes happen together."
    }
  ],
  equation: "y = 2(x - 1)² + 3",
  takeaway: "a = 2 makes it narrower; h = 1 moves it right 1; k = 3 moves it up 3. The vertex is (1, 3), and the axis of symmetry is x = 1.",
  graph: { a: 2, h: 1, k: 3, showAxisOfSymmetry: true },
  topicId: "combine"
}));