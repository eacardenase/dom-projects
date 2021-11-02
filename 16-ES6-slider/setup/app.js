import people from "./data.js";

const slideContainer = document.querySelector(".slide-container");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

// set slides
slideContainer.innerHTML = people
    .map((person, slideIndex) => {
        const { img, name, job, text } = person;
        // more logic
        let position = "next";
        if (slideIndex === 0) {
            position = "active";
        }
        if (slideIndex === people.length - 1) {
            position = "last";
        }
        return `
    <article class="slide ${position}">
                    <img
                        class="img"
                        src="${img}"
                        alt="${name}"
                    />
                    <h4>${name}</h4>
                    <p class="title">${job}</p>
                    <p class="text">
                        ${text}
                    </p>
                    <div class="quote-icon">
                        <div class="fas fa-quote-right"></div>
                    </div>
                </article>
    `;
    })
    .join("");

// slides functionality
const startSlider = (type) => {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextElementSibling;

    if (!next) {
        next = slideContainer.firstElementChild;
    }

    active.classList.remove(["active"]);
    last.classList.remove(["last"]);
    next.classList.remove(["next"]);

    if (type === "prev") {
        active.classList.add("next");
        last.classList.add("active");
        next = last.previousElementSibling;

        if (!next) {
            next = slideContainer.lastElementChild;
        }

        next.classList.remove(["next"]);
        next.classList.add("last");

        return;
    } else {
        active.classList.add("last");
        last.classList.add("next");
        next.classList.add("active");
    }
};

nextButton.addEventListener("click", () => {
    startSlider();
});

prevButton.addEventListener("click", () => {
    startSlider("prev");
});
