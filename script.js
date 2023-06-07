const incrementbtn = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const inputelement = document.querySelector('.inc-dec input');

let counter = document.querySelector('.counter-value h3');
let counter_value = parseInt(counter.innerText);
let incdecby = 0;

// increment handler
incrementbtn.addEventListener('click', function () {
    counter_value = counter_value + 1;
    counter.innerText = counter_value;
});

// decrement handler
decrement.addEventListener('click', function () {
    if (counter_value < 1) {
        return;
    }

    counter_value = counter_value - 1;
    counter.innerText = counter_value;
});

// input change handler
inputelement.addEventListener("change", function(e) {
    if(incdecby != "") {
        console.timeLog("jgdas");
        incdecby = e.target.value;
    }
})