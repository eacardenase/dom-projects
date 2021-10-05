const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (event) {
    const id = event.target.dataset.id;

    if (id) {
        // remove active class from all the buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            event.target.classList.add("active");
        });

        // remove active class from all the articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
