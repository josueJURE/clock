const hoursHand = document.querySelector("[data-hour-hand ]");
const minutesHand = document.querySelector("[data-minute-hand]");
const secondsHand = document.querySelector("[data-second-hand]");

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeInterval = 6;
   
    secondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)";
    minutesHand.style.transform = "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
}

setInterval(getTime, 100)