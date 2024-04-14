let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {

    let currenttime = new Date();
    hrs.innerHTML = (currenttime.getHours() < 10 ? "0" : '') + currenttime.getHours();
    min.innerHTML = (currenttime.getMinutes() < 10 ? "0" : '') + currenttime.getMinutes();
    sec.innerHTML = (currenttime.getSeconds() < 10 ? "0" : '') + currenttime.getSeconds();

}, 1000)


