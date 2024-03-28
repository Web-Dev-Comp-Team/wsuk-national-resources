//Put your code here

const colorBlock = document.querySelector(".color-block");
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

var redHex = updateHex(redSlider);
var greenHex = updateHex(greenSlider);
var blueHex = updateHex(blueSlider);

redSlider.addEventListener("input", () => {
    redHex = updateHex(redSlider);
    updateColorBlock();
});

greenSlider.addEventListener("input", () => {
    greenHex = updateHex(greenSlider);
    updateColorBlock();
});

blueSlider.addEventListener("input", () => {
    blueHex = updateHex(blueSlider);
    updateColorBlock();
});

function updateColorBlock() {
    console.log(redHex, greenHex, blueHex);
    colorBlock.style.backgroundColor = '#' + redHex + greenHex + blueHex;
}

function updateHex(slider) {
    return parseInt(slider.value).toString(16);
}