// Element references for displaying time
let msec = document.getElementById('msec');
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hr = document.getElementById('hr');
let day = document.getElementById('day');
// Timer variables
let timer;
let ms = s = m = h = d = 0;
// Function to start the timer
const stratTimer = () => {
    timer = setInterval(() => {
        // Update displayed values with leading zeroes
        ms++;
        msec.innerHTML = ms < 10 ? "0" + ms : msec.innerHTML = ms;
        sec.innerHTML = s < 10 ? "0" + s : sec.innerHTML = s;
        min.innerHTML = m < 10 ? "0" + m : min.innerHTML = m;
        hr.innerHTML = h < 10 ? "0" + h : hr.innerHTML = h;
        day.innerHTML = d < 10 ? "0" + d : day.innerHTML = d;
        
        if (ms == 100) ms = 0, s++, console.log(s);
        if (s == 60) s = 0, m++;
        if (m == 60) m = 0, h++;
        if (h == 24) h = 0, d++;
        
    }, 10);// Update every 10 milliseconds for better precision
};
// Function to stop the timer
const stopTimer = () => {
    clearInterval(timer);    
};
// Function to reset the timer
const resetTimer = () => {
    msec.innerHTML = sec.innerHTML = min.innerHTML = hr.innerHTML = day.innerHTML = "00";
    ms = s = m = h = d = 0;
};