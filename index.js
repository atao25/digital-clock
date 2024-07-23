
function updateClock() {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${min}:${sec}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); // call fn after every 1000ms