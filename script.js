const backToTopButton = document.getElementById("back-to-top-btn");
const header = document.querySelector("header");
const caseToc = document.querySelector(".case-toc");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    backToTopButton.classList.toggle("visible", currentScroll > 20);

    const scrollDelta = currentScroll - lastScrollTop;
    if (scrollDelta > 10) {
        header.classList.add("hide");
        if (caseToc) caseToc.classList.add("header-hidden");
    } else if (scrollDelta < 0) {
        header.classList.remove("hide");
        if (caseToc) caseToc.classList.remove("header-hidden");
    }

    lastScrollTop = currentScroll;
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const yearEl = document.getElementById("footer-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hero headline word swap (index.html only, skipped if reduced motion is preferred)
const heroWords = document.querySelectorAll(".hero-word");
if (heroWords.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let activeIndex = 0;
    let swapCount = 0;
    const maxSwaps = heroWords.length * 3; // a few full passes, then settle back on the first word

    const heroWordTimer = setInterval(function () {
        heroWords[activeIndex].classList.remove("is-active");
        activeIndex = (activeIndex + 1) % heroWords.length;
        heroWords[activeIndex].classList.add("is-active");

        swapCount++;
        if (swapCount >= maxSwaps) clearInterval(heroWordTimer);
    }, 2200);
}

// Case study section index: highlight the current section while scrolling
if (caseToc && "IntersectionObserver" in window) {
    const tocLinks = Array.from(caseToc.querySelectorAll("a"));
    const sections = tocLinks
        .map(function (link) {
            return document.getElementById(link.getAttribute("href").slice(1));
        })
        .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                const link = caseToc.querySelector('a[href="#' + entry.target.id + '"]');
                if (!link) return;
                tocLinks.forEach(function (l) { l.classList.remove("is-active"); });
                link.classList.add("is-active");
            });
        },
        { rootMargin: "-160px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { sectionObserver.observe(section); });
}
