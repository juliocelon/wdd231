
const paragraph = document.getElementById('visitMessage');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
let message = "";

if (!lastVisit) {
    // First visit
    message = "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const daysSinceLastVisit = Math.floor((now - parseInt(lastVisit)) / millisecondsInADay);

    if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

// Update paragraph content
paragraph.textContent = message;

// Store current date as last visit
localStorage.setItem('lastVisit', now);