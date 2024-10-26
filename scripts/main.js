// JS

// navbar

function updateDateTime() {
    const dayTimeElement = document.querySelector('.day-time');

    // days of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // get the current date and time
    const now = new Date();
    const dayWeek = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const formattedTime = `${dayWeek}, ${hours}:${minutes}h`;
    
    dayTimeElement.textContent = formattedTime;
}

setInterval(updateDateTime, 1000); // to keep the time updated in real-time every second

updateDateTime();


