const bodyBackground = document.querySelector('body');
let button = document.querySelector('.button');
const number = document.getElementsByClassName('number')[0];
var counter = 0;

const colors = [
  '#F5E1DA',
  '#F1F1F1',
  '#40A798',
  '#476269',
  '#A03232',
  '#C86F5E',
  '#E6C073',
  '#FFFEB8',
  '#F4F7F7',
  '#FFFBAF',
  '#FF5656',
  '#40A798',
  '#CD0A0A',
  '#42CFC4',
  '#FFDD67',
  '#FFCD38',
  '#062743',
  '#113A5D',
  '#FF7A8A',
  '#F6490D',
  '#000249',
  '#1DCED8',
  '#FF5959',
  '#FFAD5A',
  '#4F9DA6',
  '#1A0841',
  '#B67CCF',
  '#5BE7C4',
  '#7A57D1',
  '#40A798',
  '#74F6A7',
  '#43A680',
  '#CC376D',
  '#0092CA',
  '#FA4659',
  '#2EB872'
];

console.log(button);

document.querySelector('.button').addEventListener('click', changeColor);

function changeColor() {
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  bodyBackground.style.backgroundColor = randomColor;
}

colorTimer = () => {
  var timer = setInterval(() => {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
    bodyBackground.style.backgroundColor = randomColor;
    counter = counter + 1;
    number.innerText = counter.toString();
  }, 2000);
};

colorTimer();
