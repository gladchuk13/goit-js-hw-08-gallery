/* window.addEventListener('scroll', _.throttle(() => {
    console.log('scroll every 300ms')
}, 300),) */
/* let span = document.querySelector('.span')
let scrollEvent = 0;

document.addEventListener('scroll', _.throttle(() => {
    scrollEvent += 1;
    span.textContent = scrollEvent;
    
}, 200)) */
/* let input = document.querySelector('.input');
function inputCheck () {
    console.log(input.value)
}
let slowMotion = _.throttle(inputCheck, 1000);
input.addEventListener('input', slowMotion ) */
let output = document.querySelector('.output');
let colorPalette = document.querySelector('.colorPalette');

colorPalette.addEventListener('click', colorSelector);

function colorSelector(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }
    let colorSelected = e.target.dataset.color;
    output.innerHTML = `${colorSelected} - ви обрали колір`;
    output.style.color = colorSelected;
}

function colorCreate() {
    let items = [];
    for (let i = 0; i < 60; i++) {
        const randomColor = getRandomColor();
        let button = document.createElement('button');
        button.type = 'button';
        button.dataset.color = randomColor;
        button.style.backgroundColor = randomColor;
        button.classList.add('element');
        items.push(button);
    }
    colorPalette.append(...items);
}

function getRandomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

function getRandomHex() {
    return Math.floor(Math.random() * 256) // Випадкове число від 0 до 255
        .toString(16)
        .padStart(2, '0');
}

colorCreate();





/* function mouseMoving(e) {
    let box = document.getElementById('box');
    box.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
}
let boxStopper = _.debounce(mouseMoving, 3400)
window.addEventListener('mousemove', mouseMoving) */