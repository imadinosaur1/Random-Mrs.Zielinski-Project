Engine.register("vertex-form", () => createLessonScreen({
  title: "Meet vertex form",
  dialogue: [
    {
      speaker: "joel",
      text: "A parabola can be written in vertex form: y = a(x - h)² + k."
    },
    {
      speaker: "michael",
      text: "The letter h slides the graph left or right. Watch the minus sign: (x - 1) slides right 1."
    },
    {
      speaker: "joel",
      text: "The letter k slides the graph up or down. Here, + 3 moves it up 3."
    },
    {
      speaker: "michael",
      text: "The letter a changes the U's shape. A bigger a makes it narrower; a negative a flips it upside down."
    }
  ],
  equation: "y = 2(x - 1)² + 3",
  takeaway: "Here a = 2, h = 1, and k = 3. The graph is narrower, moves right 1, and moves up 3.",
  graph: { a: 2, h: 1, k: 3 },
  topicId: "vertex-form"
}));