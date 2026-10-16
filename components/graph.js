function createParabolaComparison({ a = 1, h = 0, k = 0 }) {
  const figure = Utils.createElement("figure", "graph-comparison");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("viewBox", "0 0 280 200");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "A graph comparing two parabolas");

  function addLine(x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#64748b");
    svg.appendChild(line);
  }

  addLine(0, 100, 280, 100);  // x-axis
  addLine(140, 0, 140, 200);  // y-axis

  function makeCurve(curveA, curveH, curveK, color, dashed = false) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const points = [];

    for (let x = -5; x <= 5; x += 0.1) {
      const px = 140 + x * 26;
      const py = 100 - (curveA * (x - curveH) ** 2 + curveK) * 10;
      points.push(`${x === -5 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`);
    }

    path.setAttribute("d", points.join(" "));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "4");

    if (dashed) path.setAttribute("stroke-dasharray", "7 6");

    svg.appendChild(path);
  }

  makeCurve(1, 0, 0, "#94a3b8", true); // parent graph: y = x²
  makeCurve(a, h, k, "#7c3aed");       // changed graph

  figure.appendChild(svg);
  figure.appendChild(
    Utils.createElement("figcaption", "", "Gray is the starting graph. Purple is the changed graph.")
  );

  return figure;
}