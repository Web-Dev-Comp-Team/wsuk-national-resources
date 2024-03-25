//Put your code here

let monalisa = new Image();
monalisa.src = './img/monalisa.jpg';

let theKiss = new Image();
theKiss.src = './img/the-kiss.jpg';

let youngPearl = new Image();
youngPearl.src = './img/young-pearl.jpg';

let athena = new Image();
athena.src = './img/athena.jpg';

let currentPhoto;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

function drawImageOnCanvas(image) {
    ctx.drawImage(image, 0, 0, 130, 140);
}


athena.onload = function() {
    drawImageOnCanvas(athena);
}

let photoSelect = document.querySelector('#photoSelect');
photoSelect.addEventListener("change", changeOption);

function changeOption(){
    let selectedOption = photoSelect.value;

    if (selectedOption == "athena") {
        drawImageOnCanvas(athena);
        drawFilterOnCanvas(athena);
    } else if (selectedOption == 'monalisa'){
        drawImageOnCanvas(monalisa);
        drawFilterOnCanvas(monalisa);
    } else if (selectedOption == 'theKiss'){
        drawImageOnCanvas(theKiss);
        drawFilterOnCanvas(theKiss);
    } else if (selectedOption == 'youngPearl'){
        drawImageOnCanvas(youngPearl);
        drawFilterOnCanvas(youngPearl);
    }
}

let filter = document.querySelector('#filterSelect');
filter.addEventListener('change', filterChange);

function filterChange(){
    console.log('hello');
    let selectedFilter = filter.value;
    selectedOption = photoSelect.value;

    if (selectedFilter == 'darken'){
        if (selectedOption == "athena") {
            drawFilterOnCanvas(athena);
        } else if (selectedOption == 'monalisa'){
            drawFilterOnCanvas(monalisa);
        } else if (selectedOption == 'theKiss'){
            drawFilterOnCanvas(theKiss);
        } else if (selectedOption == 'youngPearl'){
            drawFilterOnCanvas(youngPearl);
        }
    } else if (selectedFilter == 'brighten'){

    }
}


function drawFilterOnCanvas(image) {
    ctx.drawImage(image, 150, 0, 130, 140);
}