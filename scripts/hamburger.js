const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector(".main");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    main.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    main.classList.remove("active");
}));