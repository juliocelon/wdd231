

const cards = document.querySelector('#bussiness');

async function getBussinessData() {
    const basePath = location.hostname.includes('github.io')
        ? `${location.pathname.split('/')[1]}/` // repo name as subfolder
        : ''; // local
    const response = await fetch(`${basePath}data/members.json`);
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

        let name = document.createElement('h3');
        name.textContent = member.name;

        let contactInfo = document.createElement('div');
        contactInfo.innerHTML = `
            <p>${member.address}</p>
            <p>${member["phone number"]}</p>
        `;

        let website = document.createElement('a');
        website.href = member["web site url"];
        website.textContent = "Visit Website";
        website.target = "_blank";

        // Image (only for grid)
        let image = document.createElement('img');
        image.src = member.image;
        image.alt = `Logo of ${member.name}`;
        image.loading = 'lazy';

        // Append for grid
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(contactInfo);
        card.appendChild(website);

        cards.appendChild(card);
    });
};
