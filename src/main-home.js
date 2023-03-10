import { $content, createHtmlElement } from "./index";

function render() {
  const $main = document.createElement("main");

  const $bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    ""
  );
  const $title = createHtmlElement("h1", null, ["white"], "La panaderia");

  const $hr = document.createElement("hr");
  const $subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "True ingredients, true flavors, true passion. Good food doesn't need to be complicated"
  );
  const $button = createHtmlElement("button", null, null, "menu");

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($subtitle);
  $main.appendChild($button);

  $content.appendChild($main);
}

export { render as renderHome };