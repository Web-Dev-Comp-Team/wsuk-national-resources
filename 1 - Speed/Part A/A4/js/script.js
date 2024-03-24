//Put your code here

const face = document.querySelector(".face");
const happyButton = document.querySelector("#happy");
const neutralButton = document.querySelector("#neutral");
const sadButton = document.querySelector("#sad");

happyButton.addEventListener("click", () => {
    animateFace("green");
    face.textContent = ":)";
});
neutralButton.addEventListener("click", () => {
    animateFace("yellow");
    face.textContent = ":|";
});
sadButton.addEventListener("click", () => {
    animateFace("red");
    face.textContent = ":(";
});

function animateFace(to) {
    face.animate([{ backgroundColor: face.style.backgroundColor, backgroundColor: to }], {
        duration: 500,
        fill: "forwards", // Keeps the final animation state
    });
}
