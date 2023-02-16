var timerEl = document.querySelector('.timer-count');

// timerEl.value = "test";

function countdown () {
    var timeLeft = 10;
}

var timeInterval = setInterval (function() {
    if (timeLeft === 0) {
        clearInterval(timeInterval);
        displayAnswer();
    } 1000;
});



