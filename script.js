const backToTopButton = document.getElementById("back-to-top-btn");
const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Show/hide back to top button
    backToTopButton.style.display = currentScroll > 20 ? "block" : "none";

    // Show/hide navbar
    header.classList.toggle("hide", currentScroll > lastScrollTop && currentScroll > 0);
    lastScrollTop = currentScroll;
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
