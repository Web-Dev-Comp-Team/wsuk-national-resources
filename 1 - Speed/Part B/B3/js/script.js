//Put your code here

const colorBlock = document.querySelector(".color-block");
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

var redValue = redSlider.value;

redSlider.addEventListener("change", () => {
    redValue = redSlider.value;
    updateColorBlock;
});

function updateColorBlock() {
    colorBlock.style.backgroundColor = redValue;
}
