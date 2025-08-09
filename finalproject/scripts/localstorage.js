
const paragraph = document.getElementById('visitmessage');
const lastvisit = localStorage.getItem('lastvisit');
const now = Date.now();
let message = "";

if (!lastvisit) {
    // First visit
    message = "Welcome! Feel free to reach out if you have any questions or feedback – we're here to help!";
} else {
    const millisecondsinaday = 24 * 60 * 60 * 1000;
    const dayssincelastvisit = Math.floor((now - parseInt(lastvisit)) / millisecondsinaday);

    if (dayssincelastvisit < 1) {
        message = "Welcome back so soon! That's fantastic! We're excited to continue your learning journey!";
    } else if (dayssincelastvisit === 1) {
        message = "Great to see you back! You last visited just 1 day ago – keep up the awesome progress!";
    } else {
        message = `You last visited ${dayssincelastvisit} days ago. Welcome back, we’re glad to see you again!`;
    }
}

// Update paragraph content
paragraph.textContent = message;

// Store current date as last visit
localStorage.setItem('lastvisit', now);