const State = {
  currentScene: null,

  topicIds: [
    "vertex-form",
    "horizontal",
    "vertical",
    "stretch",
    "compression",
    "reflection",
    "combine",
    "axis-symmetry"
  ],

  completedTopics: new Set(),

  setScene(sceneId) {
    State.currentScene = sceneId;
  },

  completeTopic(topicId) {
    if (State.topicIds.includes(topicId)) {
      State.completedTopics.add(topicId);
    }
  },

  isTopicComplete(topicId) {
    return State.completedTopics.has(topicId);
  },

  allTopicsComplete() {
    return State.topicIds.every(topicId =>
      State.completedTopics.has(topicId)
    );
  }
};