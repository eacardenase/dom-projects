const links = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");

btn.addEventListener("click", function () {
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
});
