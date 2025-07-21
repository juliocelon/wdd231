
const params = new URLSearchParams(window.location.search);

const firstName = params.get('first');
const lastName = params.get('last');
const phone = params.get('phone');
const email = params.get('email');
const ordinance = params.get('ordinance');
const date = params.get('date');
const location1 = params.get('location');

const results = document.querySelector("#results");
const today = new Date();

let messageP = document.createElement('p');
messageP.textContent = `Appointment for:`;

let firstNameP = document.createElement('p');
firstNameP.textContent = `First Name: ${firstName}`;

let lastNameP = document.createElement('p');
lastNameP.textContent = `Last Name: ${lastName}`;

let phoneP = document.createElement('p');
phoneP.textContent = `Phone: ${phone}`;

let emailP = document.createElement('p');
emailP.textContent = `Email: ${email}`;

let ordinanceP = document.createElement('p');
ordinanceP.textContent = `Ordinance: ${ordinance}`;

let dateP = document.createElement('p');
dateP.textContent = `Date: ${new Date(date).toLocaleDateString()}`;

let locationP = document.createElement('p');
locationP.textContent = `Location: ${location1}`;

let todayP = document.createElement('p');
todayP.textContent = `Today's Date: ${today.toLocaleDateString()}`;

results.appendChild(messageP);
results.appendChild(firstNameP);
results.appendChild(lastNameP);
results.appendChild(phoneP);
results.appendChild(emailP);
results.appendChild(ordinanceP);
results.appendChild(dateP);
results.appendChild(locationP);
results.appendChild(todayP);