

const cards = document.querySelector('#branches');

const displayBranches = (branches) => {

    const shuffledBranches = branches.sort(() => 0.5 - Math.random());

    const selectedBranches = shuffledBranches.slice(0, 4);

    selectedBranches.forEach((branch) => {
        let card = document.createElement('section');

        let name = document.createElement('h3');
        name.textContent = branch.name;

        let contactInfo = document.createElement('p');
        contactInfo.innerHTML = `
            <p>${branch.address}</p>
            <p>${branch["phone number"]}</p>
        `;

        let website = document.createElement('a');
        website.href = branch["web site url"];
        website.textContent = "Visit Website";
        website.target = "_blank";

        // Image (only for grid)
        let image = document.createElement('img');
        image.src = branch.image;
        image.alt = `Logo of ${branch.name}`;
        image.loading = 'lazy';

        // Append for grid
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(contactInfo);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

async function getBranches() {
    try {
        const response = await fetch("https://juliocelon.github.io/wdd231/finalproject/data/branches.json"); // request
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.branches);
        displayBranches(data.branches);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

getBranches();