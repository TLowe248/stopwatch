var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
var isRunning = false;
var interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    timerTime = 0;
    stopTimer();
    minutes.textContent = '00';
    seconds.textContent = '00';
}
function incrementTimer() {
    timerTime += 1;
    minutes.textContent = String(padNumber(Math.floor(timerTime / 60)));
    seconds.textContent = String(padNumber(timerTime % 60));
}
function padNumber(number) {
    return number < 10 ? '0' + number : number;
}
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', startTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', stopTimer);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetTimer);
