// Create a Stopwatch
let seconds = 0;
let minutes = 0;
let hours = 0;

let state = 0;

let stopWatch = setInterval(() => {
    console.clear();
    console.log(`Stopwatch: [${pad(hours)}:${pad(minutes)}:${pad(seconds)}]  ${loading(state)}`);

    state += 1;
    if (state === 4) {
        state = 0;
    }

    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }
}, 1000);

// Create Loading... animation effect
function loading(state) {
    const symbols = ["\\", "|", "/", "\u2014"];
    return symbols[state];
}

// Pad numbers
function pad(number) {
    if (String(number).length === 1) {
        number = "0" + number;
    }
    return number;
}