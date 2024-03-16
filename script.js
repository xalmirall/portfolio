/* Show "Back to top button" */
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top-btn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener("click", function () {
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 8); // Adjust the division value for different scroll speeds
        }
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.classList.add("hide");
    } else {
        // Scroll up
        header.classList.remove("hide");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});