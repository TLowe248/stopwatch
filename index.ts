const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes')!;
const seconds = document.querySelector('.seconds')!;

let timerTime = 0;
let isRunning = false;
let interval: number;

function startTimer(): void {
	if (isRunning) return;
	isRunning = true;
	interval = setInterval(incrementTimer, 1000);
}

function stopTimer(): void {
	if (!isRunning) return;
	isRunning = false;
	clearInterval(interval);
}

function resetTimer(): void {
	timerTime = 0;
	stopTimer();
	minutes.textContent = '00';
	seconds.textContent = '00';
}

function incrementTimer(): void {
	timerTime += 1;
	minutes.textContent = String(padNumber(Math.floor(timerTime / 60)));
	seconds.textContent = String(padNumber(timerTime % 60));
}

function padNumber(number: number): string | number {
	return number < 10 ? '0' + number : number;
}

startButton?.addEventListener('click', startTimer);
stopButton?.addEventListener('click', stopTimer);
resetButton?.addEventListener('click', resetTimer)