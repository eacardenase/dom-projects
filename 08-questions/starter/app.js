// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (event) {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//         question.sib;
//     });
// });

// using selector inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
        // allowing only one question open at a time
        questions.forEach(function (item) {
            // my solution
            // if (item.classList.contains("show-text")) {
            //     item.classList.remove("show-text");
            // }

            // solution given
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});
