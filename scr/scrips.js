const menuBtn = document.getElementById("menu-btn");
const navMobile = document.getElementById("nav-mobile");
const links = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navMobile.classList.toggle("active");
})

links.forEach(link => {
    link.addEventListener("click", () =>{
        navMobile.classList.remove("active");
    });
});