let nav = document.querySelector(".resp-nav");
document.querySelector(".menu-icon").addEventListener("click", () => {
    nav.style.left = "0%"
    nav.style.position = "fixed"
})
document.querySelector(".ri-close-large-fill").addEventListener("click", () => {
    nav.style.left = "-100%"
})
