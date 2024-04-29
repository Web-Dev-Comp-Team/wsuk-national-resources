
const smileyButton = document.querySelector('#happy');
const averageButton = document.querySelector('#average');
const sadButton = document.querySelector('#sad');

const face = document.getElementById('face');
const faceText = document.querySelector('.mood');

smileyButton.onclick = happy;
averageButton.onclick = average;
sadButton.onclick = sad;

function happy(){
    changeFaceText(':)');
    face.style.backgroundColor = '#a9db71';
}

function average(){
    changeFaceText(':|');
    face.style.backgroundColor = '#eed16b';
}

function sad(){
    changeFaceText(':(');
    face.style.backgroundColor = '#ee9395';
}

function changeFaceText(newFace){
    face.style.transitionDuration = '0.5s';
    faceText.innerHTML = newFace;
}