const incrementbtn = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');

let counter = document.querySelector('.counter-value h3');
let counter_value = parseInt(counter.innerText);

// increment handler
incrementbtn.addEventListener('click', function () {
    counter_value = counter_value + 1;
    counter.innerText = counter_value;
});

// decrement handler
decrement.addEventListener('click', function () {
    counter_value = counter_value - 1;
    if (counter_value < 0) {
        return;
    }
    counter.innerText = counter_value;
});



