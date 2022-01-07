var currentNumberWrapper = document.getElementById('currentNumber');

var plus = document.getElementById('plus');
plus.addEventListener('click', increment, false);

var less = document.getElementById('less');
less.addEventListener('click', decrement, false);

var currentNumber = 0;
const limitUp = 10;
const limitDown = -10;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    less.disabled = false;

    if (currentNumber < 0) {
        addNegativeClass();
    } else if (currentNumber < 0) {
        rmNegativeClass()
    }

    if (currentNumber === limitUp) {
        plus.disabled = true;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    plus.disabled = false;

    if (currentNumber < 0) {
        addNegativeClass();
    } else if (currentNumber < 0) {
        rmNegativeClass()
    }

    if (currentNumber === limitDown) {
        less.disabled = true;
    }
}


function addNegativeClass() {
    currentNumberWrapper.classList.add('negative');
}

function rmNegativeClass() {
    currentNumberWrapper.classList.remove('negative');
}