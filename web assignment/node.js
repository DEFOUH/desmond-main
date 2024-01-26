/*function updateCounter() {
    var now = new Date();
    var end = new Date("January 1, 2025 00:00:00"); // Set your end date here
    var difference = end - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);

    var minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);

    var seconds = Math.floor(difference / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCounter, 1000);