const hamburger = document.querySelector(".hamburger-menu")
const nav = document.querySelector("header nav")

hamburger.addEventListener("click", (e) =>{
    nav.classList.toggle("open")
})