const Engine = {
  screens: {},

  register(screenId, renderFunction) {
    Engine.screens[screenId] = renderFunction;
  },

  exists(screenId) {
    return typeof Engine.screens[screenId] === "function";
  },

  render(screenId) {
    const container = document.querySelector("#screen-container");
    const renderFunction = Engine.screens[screenId];

    if (!container || !renderFunction) {
      console.error(`Could not display scene: ${screenId}`);
      return;
    }

    container.replaceChildren(renderFunction());
  }
};