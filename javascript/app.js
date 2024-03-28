// For nav bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// for area code phone input
let input = document.querySelector("#phone-number");
window.intlTelInput(input, {
    initialCountry: "no",
    separateDialCode: true,
    preferredCountries: ["no", "se", "dk", "is", "fi"],
});