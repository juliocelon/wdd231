

const cards = document.querySelector('#bussiness');

async function getBussinessDataLevel2or3() {

    const response = await fetch("https://juliocelon.github.io/wdd231/finalproject/data/members.json"); // request
    if (!response.ok) {
        console.error("HTTP error:", response.status);
        return;
    }
    const data = await response.json();
    console.table(data.members);
    displayMembersLevel2or3(data.members);
}

getBussinessDataLevel2or3();

const displayMembersLevel2or3 = (members) => {

    const filteredMembers = members.filter(member =>
        member["membership level"] === 2 || member["membership level"] === 3
    );

    const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());

    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach((member) => {
        let card = document.createElement('section');

        let name = document.createElement('h3');
        name.textContent = member.name;

        let contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
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
