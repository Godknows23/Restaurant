import { $content, createHtmlElement } from "./index";

function render() {
  const $main = document.createElement("main");
  $main.classList.add("main");

  const $bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Bienvenidos"
  );
  const $title = createHtmlElement("h1", null, ["gray"], "Nosotros");

  const $hr = document.createElement("hr");

  const content =
    "Our mission is to be the most sustainable restaurant in Zimbabwe by sourcing our ingredients locally, supplementing produce with herbs grown on our rooftop garden, and giving back to the community through urban farming education.";
  const $p = createHtmlElement("p", null, ["menu-item"], content);

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($p);

  $content.appendChild($main);
}

export { render as renderAbout };