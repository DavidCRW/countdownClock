/* Data module */
const days = document.querySelector(".day").lastElementChild;
const hours = document.querySelector(".hour").lastElementChild;
const minutes = document.querySelector(".min").lastElementChild;
const seconds = document.querySelector(".secs").lastElementChild;

const giveawayDate = new Date(`April 13 2022 11:30:00`)

/* Functions */

function giveawayCountdown(){
    const currentTime = new Date();
    const diff = giveawayDate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    if(d > 0 || h > 0 || m > 0 || s > 0){
        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }
}
setInterval(giveawayCountdown, 1000)