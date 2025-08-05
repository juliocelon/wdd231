import { courses } from '../data/courses.mjs'; // Import the places data

const cards = document.querySelector('#bussiness');

function displayMembers(courses) {
    courses.forEach(course => {
        // Create a card for each place and append it to the DOM
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <img class="myimage" src="${course.image}" alt="${course.name}" width="300" height="200" loading="lazy">
            <h2 class="h2-card">${course.name}</h2>
            <p class="level">${course.level}</p>
            <p class="schedule">${course.schedule}</p>
        `;
        cards.appendChild(card);
    });
}

function getBussinessData() {
    if (!courses || courses.length === 0) {
        console.error("Data is missing or malformed");
        return;
    }
    console.table(courses); // Log the places data for debugging
    displayMembers(courses); // Display the places data in the DOM
}

getBussinessData();
