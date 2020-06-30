///// RANDOM QUOTE
let blockquote = document.querySelector(".start p");
let cite = document.querySelector(".start cite");
async function fetchData() {
  return await fetch("https://api.quotable.io/random").then((response) =>
    response.json()
  );
}

fetchData().then((data) => {
  blockquote.textContent = `" ${data.content} "`;
  cite.textContent = `-- ${data.author}`;
});

//// HOVER EFFECT
let heading = document.querySelector(".navigation__heading");
let hoverElms = document.querySelectorAll(".navigation__link");
let contents = [
  ".intro",
  ".target",
  ".education",
  ".certificate",
  ".skill",
  ".hobby",
];

const changeHeadingColor = (selector, content) => {
  selector.addEventListener("mouseover", (e) => {
    if (selector != heading) {
      let color = window
        .getComputedStyle(e.currentTarget, ":after")
        .getPropertyValue("background-color");
      heading.style.color = color;
    } else {
      heading.style.color = "#ffac41";
    }
    document.querySelector(".active").classList.remove("active");
    content.classList.add("active");
  });
};

changeHeadingColor(heading, document.querySelector(".start"));

for (let i = 0; i < 6; ++i) {
  changeHeadingColor(hoverElms[i], document.querySelector(contents[i]));
}

////
