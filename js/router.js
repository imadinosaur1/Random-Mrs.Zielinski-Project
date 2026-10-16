const Router = {
  navigate(sceneId) {
    if (!Engine.exists(sceneId)) {
      console.error(`Scene is not registered: ${sceneId}`);
      return;
    }

    State.setScene(sceneId);
    Engine.render(sceneId);
  },

  goToHub() {
    Router.navigate("hub");
  },

  completeTopic(topicId) {
    State.completeTopic(topicId);
    Router.goToHub();
  }
};