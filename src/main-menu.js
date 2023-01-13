import { $content, createHtmlElement } from "./index";

const menu = [
  {
    name: "Whole Fried Chicken",
    description:
      "The original classic Fried Chicken that made Max's a Filipino institution. Golden fried to perfection, with a unique blend of secret spices, talagang Sarap-to-the-Bones",
    price: "$20",
  },
  {
    name: "Cripsy Pata",
    description:
      "Premium pork knuckle cooked the same way as our Sarap-to-the-Bones® Fried Chicken. No celebration is complete without this trademark Max's dish. Served with soy-vinegar dipping sauce.",
    price: "$20",
  },
  {
    name: "All beef Kare-Kare",
    description:
      "A classic Filipino stew with a thick peanut sauce made with tripe, ox skin, and beef chucks plus a mix of vegetables drizzled with annatto oil and garnished with chopped peanuts and spring onion. Served with sauteed Max's bagoong.",
    price: "$20",

  },
];

function render() {
  const $main = document.createElement("main");
  $main.classList.add("main");

  const $bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Bienvenidos"
  );
  const $title = createHtmlElement("h1", null, ["gray"], "Menu");

  const $hr = document.createElement("hr");

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);

  menu.forEach((item) => {
    const $div = createHtmlElement("div", null, ["menu-item"], null);

    const $name = createHtmlElement("h2", null, ["golden"], item.name);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const $price = createHtmlElement("h2", null, ["golden"], item.price);
    const $hr = createHtmlElement("hr", null, ["menu-hr"], null);

    $div.appendChild($name);
    $div.appendChild($description);
    $div.appendChild($price);
    $div.appendChild($hr);

    $main.appendChild($div);
  });

  $content.appendChild($main);
}

export { render as renderMenu };