const study = document.querySelector('.study-nav');
const student = document.querySelector('.student-nav');
const research = document.querySelector('.research-nav');
const collaborate = document.querySelector('.collaborate-nav');
const news = document.querySelector('.news-nav');
const about = document.querySelector('.about-nav');

const list = [study, student, research, collaborate, news, about];

list.forEach(element => {
  element.addEventListener('mouseenter', displayThirdNav);
  // element.addEventListener('mouseleave', displayNone);
});

function displayThirdNav(event) {
  const classname = event.target.classList[2].split('-')[0];
  const element = document.querySelector('#' + classname + '-third-nav');
  element.style.display = 'flex';
  element.addEventListener('mouseleave', displayNone);
}

// function displayNone1(event) {
//   const classname = event.target.classList[2].split('-')[0];
//   const element = document.querySelector('#' + classname + '-third-nav');
//   element.style.display = 'none';
// }

function displayNone(event) {
  event.target.style.display = 'none';
}