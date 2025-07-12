

const cards = document.querySelector('#bussiness');

async function getBussinessData() {
    const response = await fetch("/chamber/data/members.json"); // request
    if (!response.ok) {
        console.error("HTTP error:", response.status);
        return;
    }
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getBussinessData();

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');

        // Image
        let image = document.createElement('img');
        image.src = member.image;
        image.alt = `Logo of ${member.name}`;
        image.loading = 'lazy';

        let name = document.createElement('p');
        name.textContent = `${member.name}`;

        let address = document.createElement('p');
        address.textContent = `${member.address}`;

        let phone = document.createElement('p');
        phone.textContent = `${member["phone number"]}`;

        let website = document.createElement('a');
        website.href = member["web site url"];
        website.textContent = member["web site url"];

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}
