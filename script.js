const btn = document.getElementById("menuAccess");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});