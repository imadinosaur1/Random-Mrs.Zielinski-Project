Engine.register("axis-symmetry", () => createLessonScreen({
  title: "Find the line of symmetry",
  dialogue: [
    {
      speaker: "joel",
      text: "A parabola has two matching sides, like a mirror."
    },
    {
      speaker: "michael",
      text: "The axis of symmetry is the invisible line right down the middle of the U."
    },
    {
      speaker: "joel",
      text: "It passes through the vertex. In vertex form, the line is x = h."
    },
    {
      speaker: "michael",
      text: "For y = (x - 2)², h is 2, so the axis of symmetry is x = 2."
    }
  ],
  equation: "y = (x - 2)² · Axis of symmetry: x = 2",
  takeaway: "The axis of symmetry runs through the vertex and splits the parabola into two matching sides.",
  graph: { a: 1, h: 2, k: 0 },
  topicId: "axis-symmetry"
}));