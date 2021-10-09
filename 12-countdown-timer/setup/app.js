const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getUTCFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 0, 1, 8, 30, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 10, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year}, ${hour}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const currentTime = new Date().getTime();
    const time = futureTime - currentTime;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    const days = Math.floor(time / oneDay);
    const hours = Math.floor((time % oneDay) / oneHour);
    const minutes = Math.floor((time % oneHour) / oneMinute);
    const seconds = Math.floor((time % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    // adding a 0 when the value is less than 10
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    // when the final date had been reached out
    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
