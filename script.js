const backToTopButton = document.getElementById("back-to-top-btn");
const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    backToTopButton.classList.toggle("visible", currentScroll > 20);

    const scrollDelta = currentScroll - lastScrollTop;
    if (scrollDelta > 10) {
        header.classList.add("hide");
    } else if (scrollDelta < 0) {
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll;
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
