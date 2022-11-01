const body = document.querySelector("body");
const h1 = document.createElement("h1");
const img = document.createElement("img");
const paragraphe = document.createElement("p");

body.append(h1);
body.append(img);
body.append(paragraphe);

body.style.backgroundColor = "white";

h1.textContent = "Dark/Light Mode Switcher";

img.src =
  "https://www.pearlinux.fr/wp-content/uploads/2020/01/logo-dark-mode.png";
img.style.width = "50px";
img.style.height = "50px";
img.style.cursor = "pointer";

paragraphe.textContent = "Just press the button above to toggle!";

img.addEventListener("click", () => {
  // if (body.style.backgroundColor === "white") {
  //   LightToDark();
  // } else if (body.style.backgroundColor === "black") {
  //   DarktoLigh();
  // }
  const a = {
    white: LightToDark,
    black: DarktoLigh,
  };
  a[body.style.backgroundColor]();
});
const LightToDark = () => {
  body.style.backgroundColor = "black";
  h1.style.color = "white";
  paragraphe.style.color = "white";
  img.style.filter = "invert(1)";
};

const DarktoLigh = () => {
  body.style.backgroundColor = "white";
  h1.style.color = "black";
  paragraphe.style.color = "black";
  img.style.filter = "invert(0)";
};
