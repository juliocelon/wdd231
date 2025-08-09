
const params = new URLSearchParams(window.location.search);

const firstName = params.get('first');
const lastName = params.get('last');
const phone = params.get('phone');
const email = params.get('email');
const orgDesc = params.get('org-desc');
const timeStamp = params.get('timestamp');
const membership = params.get('membership');

const results = document.querySelector("#results");
const today = new Date();

let brP = document.createElement('br');

let messageP = document.createElement('p');
messageP.textContent = `We will review you information`;

let firstNameP = document.createElement('p');
firstNameP.textContent = `First Name: ${firstName}`;

let lastNameP = document.createElement('p');
lastNameP.textContent = `Last Name: ${lastName}`;

let phoneP = document.createElement('p');
phoneP.textContent = `Phone: ${phone}`;

let emailP = document.createElement('p');
emailP.textContent = `Email: ${email}`;

let timestampP = document.createElement('p');
timestampP.textContent = `Timestamp: ${timeStamp}`;

let membershipP = document.createElement('p');
membershipP.textContent = `Membership: ${membership}`;

results.appendChild(brP);
results.appendChild(messageP);
results.appendChild(firstNameP);
results.appendChild(lastNameP);
results.appendChild(phoneP);
results.appendChild(emailP);
results.appendChild(timestampP);
