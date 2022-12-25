const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time-left');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
let timerId = 0;

startBtn.addEventListener('click', e => {
    startBtn.style.color = "var(--bright)";
    e.preventDefault();
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt((e.target.getAttribute('data-time')));
        screens[1].classList.add('up');
        startGame()
    }
})

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    timerId = setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        clearInterval(timerId);
        finishGame();
    } else {
        let current = --time;
    if (current < 10) {
        current = `0${current}`
    }
    setTime(current);
    }   
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h2>Your score: <span class='primary'>${score}<span></h2>`;
    board.innerHTML += `<a href="#" class="again" id="again">Play again</a>`;
    const againBtn = document.querySelector('#again');
    againBtn.style.color = "var(--bright)";
    againBtn.addEventListener('click', restart);
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function restart() {
    screens[1].classList.remove('up');
    score = 0;
    time = 0;
    timeEl.parentNode.classList.remove('hide');
    board.innerHTML = "";
}