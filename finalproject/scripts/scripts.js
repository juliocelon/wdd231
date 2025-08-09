import { courses } from '../data/courses.mjs'; // Import the courses data

const cards = document.querySelector('#courses');

function displayCourses(places) {
    places.forEach(course => {
        // Create a card for each course and append it to the DOM
        const card = document.createElement('div');
        card.classList.add('place-card');
        card.innerHTML = `
            <img class="myimage" src="${course.image}" alt="${course.name}" width="300" height="200" loading="lazy">
            <h2 class="h2-card">${course.name}</h2>
            
            <p class="description">${course.description}</p>
            <p class="address"><i>${course.mode}</i></p>
        `;
        cards.appendChild(card);
    });
}

function getCourses() {
    if (!courses || courses.length === 0) {
        console.error("Data is missing or malformed");
        return;
    }
    console.table(courses);
    displayCourses(courses);
}

getCourses();
