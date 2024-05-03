//Put your code here

const imageOverlay = document.querySelector(".image-overlay");
const imageContainer = document.querySelector(".image-container");
// const main = document.getElementsByClassName('main');

function handleMouseMove(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    // console.log("Mouse Position:", mouseX, mouseY);
    if (
        mouseX >= imageContainer.offsetLeft &&
        mouseX <= imageContainer.offsetLeft + imageContainer.offsetWidth &&
        mouseY >= imageContainer.offsetTop &&
        mouseY <= imageContainer.offsetTop + imageContainer.offsetHeight
    ) {
        // imageOverlay.style.offsetWidth = mouseX;
        imageOverlay.style.width = mouseX - imageContainer.offsetLeft + "px";
        console.log(mouseX - imageContainer.offsetLeft + "px");
    }
}
document.addEventListener("mousemove", handleMouseMove);
