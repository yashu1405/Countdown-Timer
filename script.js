const christMas = new Date("25 Dec 2024");

function countDown() {
  const christMasDate = new Date(christMas);
  const currentDate = new Date();
  const milliseconds = christMasDate - currentDate;
  let totalseconds = Math.floor(milliseconds / 1000);
  let days = Math.floor(totalseconds / (24 * 3600));
  let remainingSeconds = totalseconds % (24 * 3600);

  let hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds %= 3600;
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = Math.floor(remainingSeconds % 60);

  const dayC = document.querySelector("#day-c");
  dayC.textContent = days;

  const hoursC = document.querySelector("#hours-c");
  hoursC.textContent = format(hours);

  const minC = document.querySelector("#min-c");
  minC.textContent = format(minutes);

  const secC = document.querySelector("#sec-c");
  secC.textContent = format(seconds);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}
countDown();

setInterval(countDown, 1000);
