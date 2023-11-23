let timer;
let remainingTime;
let display = document.getElementById('display');
let minutesInput = document.getElementById('minutes');

function startTimer() {
    let minutes = parseInt(minutesInput.value);

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid positive number for minutes.");
        return;
    }

    remainingTime = minutes * 60;

    timer = setInterval(updateDisplay, 1000);
}

function resetTimer() {
    clearInterval(timer);
    remainingTime = 0;
    updateDisplay();
}

function updateDisplay() {
    let minutesRemaining = Math.floor(remainingTime / 60);
    let secondsRemaining = remainingTime % 60;

    display.textContent = `${formatTime(minutesRemaining)}:${formatTime(secondsRemaining)}`;

    if (remainingTime === 0) {
        clearInterval(timer);
        alert("Time's up!");
    } else {
        remainingTime--;
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
