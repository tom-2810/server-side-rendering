const hamburgerButton = document.querySelector("#navigation button");

hamburgerButton.addEventListener("click", function() {
    const isOpened = hamburgerButton.getAttribute('aria-expanded');
    if (isOpened === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }

    document.querySelector("#navigation #top-nav").classList.toggle("open");
    document.body.classList.toggle("stop-scroll");
});