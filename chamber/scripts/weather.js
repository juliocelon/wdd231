// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.30&lon=-99.14&appid=e847be2dadd4b5cd6b6d80904ffa7497&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {

    currentTemp.innerHTML = `${(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
}

const tomorrowTemp = document.querySelector('#tomorrow-temp');
const afterTomorrowTemp = document.querySelector('#after-tomorrow-temp');
const afterATomorrowTemp = document.querySelector('#after-a-tomorrow-temp');

function displayWeekdays() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const todayIndex = today.getDay();

    const todayName = days[todayIndex];

    const tomorrowIndex = (todayIndex + 1) % 7;
    const tomorrowDayName = days[tomorrowIndex];

    const dayAfterTomorrowIndex = (todayIndex + 2) % 7;
    const dayAfterTomorrowName = days[dayAfterTomorrowIndex];

    const dayAfterATomorrowIndex = (todayIndex + 3) % 7;
    const dayAfterATomorrowName = days[dayAfterATomorrowIndex];

    tomorrowTemp.innerHTML = `${tomorrowDayName}: `;
    afterTomorrowTemp.innerHTML = `${dayAfterTomorrowName}: `;
    afterATomorrowTemp.innerHTML = `${dayAfterATomorrowName}: `;
}

displayWeekdays();

async function apiFetchForecast() {
    let urlToday = `https://api.openweathermap.org/data/2.5/forecast?lat=19.3&lon=-99.14&appid=e847be2dadd4b5cd6b6d80904ffa7497&units=metric`;

    //console.log(urlToday);
    try {
        const response = await fetch(urlToday);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            tomorrowTemp.innerHTML += `${(data.list[4].main.temp)}&deg;C`;
            afterTomorrowTemp.innerHTML += `${(data.list[12].main.temp)}&deg;C`;
            afterATomorrowTemp.innerHTML += `${(data.list[20].main.temp)}&deg;C`;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();