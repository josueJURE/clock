const hoursHand = document.querySelector("[data-hour-hand ]");
const minutesHand = document.querySelector("[data-minute-hand]");
const secondsHand = document.querySelector("[data-second-hand]");

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();
    const timeInterval = 6;
    console.log(second)


    
    hoursHand.style.transform = `rotate(${hours}deg)`;
}

getTime()