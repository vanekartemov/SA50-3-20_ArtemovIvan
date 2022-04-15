let square = document.getElementById("square");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let squareWidth = square.offsetWidth;

let down = 0;
let right = 0;
let up = 0;

let time = 0;
let leftTime = 0;

function move() {

    if (right == windowWidth - squareWidth) {
        square.style.top = down-- + "px"
        up--

    } else if (down < windowHeight - squareWidth) {
        down++
        up++
        square.style.top = down + 'px'

    } else if (up == windowHeight - squareWidth) {
        right++
        square.style.left = right + "px"

    } 

    if (up == 0 & right == windowWidth - squareWidth) {
        clearInterval(time)
        leftTime = setInterval(leftmove, 1);
    }

}

function leftmove() {
    right--
    square.style.left = right + "px"
    if (right == 0) {
    square.style.left = 0 + "px"
    square.style.top = 0 + "px"
    clearInterval(leftTime)
    time = setInterval(move, 1);
    }
}

function startAnimation(){
    time = setInterval(move, 1)
    square.removeEventListener('click', startAnimation)
}

square.addEventListener("click", startAnimation)

