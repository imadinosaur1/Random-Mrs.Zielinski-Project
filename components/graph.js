let graphNumber = 0;

function createParabolaComparison({ a = 1, h = 0, k = 0 } = {}) {
  const figure = Utils.createElement("figure", "graph-comparison");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const ns = "http://www.w3.org/2000/svg";

  const plot = { left: 44, right: 316, top: 18, bottom: 218 };
  const xMin = -5;
  const xMax = 5;
  const yMin = -6;
  const yMax = 10;
  const xScale = (plot.right - plot.left) / (xMax - xMin);
  const yScale = (plot.bottom - plot.top) / (yMax - yMin);
  const xToPixel = x => plot.left + (x - xMin) * xScale;
  const yToPixel = y => plot.top + (yMax - y) * yScale;

  svg.setAttribute("viewBox", "0 0 340 240");
  svg.setAttribute("role", "img");
  svg.setAttribute(
    "aria-label",
    `Parent parabola and transformed parabola with a=${a}, h=${h}, k=${k}`
  );

  // Clip curves to the graph's plotting rectangle.
  const clipId = `graph-clip-${++graphNumber}`;
  const defs = document.createElementNS(ns, "defs");
  const clip = document.createElementNS(ns, "clipPath");
  const clipRect = document.createElementNS(ns, "rect");

  clip.setAttribute("id", clipId);
  clipRect.setAttribute("x", plot.left);
  clipRect.setAttribute("y", plot.top);
  clipRect.setAttribute("width", plot.right - plot.left);
  clipRect.setAttribute("height", plot.bottom - plot.top);
  clip.appendChild(clipRect);
  defs.appendChild(clip);
  svg.appendChild(defs);

  function addLine(x1, y1, x2, y2, color, width = 1) {
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);
    svg.appendChild(line);
  }

  function addText(x, y, text, anchor = "middle") {
    const label = document.createElementNS(ns, "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y);
    label.setAttribute("text-anchor", anchor);
    label.setAttribute("font-size", "10");
    label.setAttribute("fill", "#334155");
    label.textContent = text;
    svg.appendChild(label);
  }

  // Grid lines and number labels.
  for (let x = xMin; x <= xMax; x++) {
    const px = xToPixel(x);
    addLine(px, plot.top, px, plot.bottom, "#e2e8f0");
    if (x !== 0) addText(px, yToPixel(0) + 14, String(x));
  }

  for (let y = yMin; y <= yMax; y++) {
    const py = yToPixel(y);
    addLine(plot.left, py, plot.right, py, "#e2e8f0");
    if (y !== 0) addText(xToPixel(0) - 12, py + 4, String(y), "end");
  }

  // The x- and y-axes.
  addLine(plot.left, yToPixel(0), plot.right, yToPixel(0), "#475569", 2);
  addLine(xToPixel(0), plot.top, xToPixel(0), plot.bottom, "#475569", 2);
  addText(plot.right - 4, yToPixel(0) - 6, "x", "end");
  addText(xToPixel(0) + 9, plot.top + 10, "y", "start");

  function addCurve(curveA, curveH, curveK, color, dashed = false) {
    const path = document.createElementNS(ns, "path");
    const points = [];

    for (let x = xMin; x <= xMax; x += 0.05) {
      const y = curveA * (x - curveH) ** 2 + curveK;
      const command = points.length === 0 ? "M" : "L";
      points.push(`${command}${xToPixel(x).toFixed(1)} ${yToPixel(y).toFixed(1)}`);
    }

    path.setAttribute("d", points.join(" "));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "3");
    path.setAttribute("clip-path", `url(#${clipId})`);
    if (dashed) path.setAttribute("stroke-dasharray", "7 5");
    svg.appendChild(path);
  }

  addCurve(1, 0, 0, "#64748b", true); // Parent graph: y = x²
  addCurve(a, h, k, "#7c3aed");       // Transformed graph

  // Mark the transformed vertex when it falls inside the plotting area.
  if (h >= xMin && h <= xMax && k >= yMin && k <= yMax) {
    const vertex = document.createElementNS(ns, "circle");
    vertex.setAttribute("cx", xToPixel(h));
    vertex.setAttribute("cy", yToPixel(k));
    vertex.setAttribute("r", "5");
    vertex.setAttribute("fill", "#f59e0b");
    vertex.setAttribute("stroke", "#ffffff");
    vertex.setAttribute("stroke-width", "2");
    svg.appendChild(vertex);

    const vertexLabel = document.createElementNS(ns, "text");
    vertexLabel.setAttribute("x", Math.min(xToPixel(h) + 8, plot.right - 35));
    vertexLabel.setAttribute("y", Math.max(yToPixel(k) - 8, plot.top + 12));
    vertexLabel.setAttribute("font-size", "10");
    vertexLabel.setAttribute("fill", "#7c2d12");
    vertexLabel.textContent = `V(${h}, ${k})`;
    svg.appendChild(vertexLabel);
  }

  figure.appendChild(svg);

  const legend = Utils.createElement("figcaption", "graph-legend");
  legend.textContent = "Dashed gray: y = x² · Purple: changed graph · Gold dot: vertex";
  figure.appendChild(legend);

  return figure;
}