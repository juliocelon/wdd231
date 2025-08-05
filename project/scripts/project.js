// HAMBURGER MENU

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// REVIEW COUNTER

document.addEventListener("DOMContentLoaded", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count += 1;
    localStorage.setItem("reviewCount", count);

    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        countDisplay.textContent = `We also noticed you've sent us information ${count} time(s), and we appreciate your patience as we review everything.`;
    }
});

