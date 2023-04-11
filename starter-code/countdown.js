const countDownDate = new Date("November 4, 2023 11:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("min");
  const secEl = document.getElementById("sec");

  daysEl.innerText = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secEl.innerHTML = sec;
});
