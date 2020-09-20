const menuToggle = document.querySelector(".menu-toggler");
const navList = document.querySelector(".nav-list");
const barStart = document.querySelector(".start");
const barEnd = document.querySelector(".end");

menuToggle.addEventListener("click", (e) => {
    navList.classList.toggle("slide");
    barStart.classList.toggle("slide");
    barEnd.classList.toggle("slide");
    menuToggle.classList.toggle("slide");
})