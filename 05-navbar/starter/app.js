const links = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");

// My solution
// btn.addEventListener("click", function () {
//     if (links.classList.contains("show-links")) {
//         links.classList.remove("show-links");
//     } else {
//         links.classList.add("show-links");
//     }
// });

// solution given
btn.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
