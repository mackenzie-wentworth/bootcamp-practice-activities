var timerEl = document.querySelector('.timer-count');

// timerEl.value = "test";

function countdown () {
    var timeleft = 10;
}

var timeInterval = setInterval (function() {
    if (timeleft === 0) {
        clearInterval(timeInterval);
        displayAnswer();
    } 1000;
});



