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