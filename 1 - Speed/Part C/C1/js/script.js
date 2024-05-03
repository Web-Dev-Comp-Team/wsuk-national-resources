const leftColourInput = document.getElementById('color-input-left');
const rightColourInput = document.getElementById('color-input-right');

const container = document.getElementById('container');

// leftColourInput.onchange = changeGradient;

leftColourInput = "'blue'"

changeGradient();

function changeGradient(){
    container.style.background = 'linear-gradient(to right, ' + leftColourInput + ', ' + rightColourInput + ')';
}