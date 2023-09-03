setInterval(setClock, 1000);

const hour = document.querySelector("[data-hour-hand]");
const minute = document.querySelector("[data-minute-hand]");
const second = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;


  setRotation(hour, hoursRatio);
  setRotation(minute, minutesRatio);
  setRotation(second, secondRatio)
}


function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()
