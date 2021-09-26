// set initial count value
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// My solution
// btns.forEach(function (item) {
//     if (item.classList.contains("increase")) {
//         item.addEventListener("click", function () {
//             count++;
//             value.textContent = count;
//         });
//     } else if (item.classList.contains("decrease")) {
//         item.addEventListener("click", function () {
//             count--;
//             value.textContent = count;
//         });
//     } else if (item.classList.contains("reset")) {
//         item.addEventListener("click", function () {
//             count = 0;
//             value.textContent = count;
//         });
//     }
// });

/* 

Given solution 

*/
btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        // setting the logic for the buttons
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        // changing the color of the number based in it's value with if statements
        // if (count > 0) {
        //     value.style.color = "green";
        // } else if (count < 0) {
        //     value.style.color = "red";
        // } else {
        //     value.style.color = "black";
        // }

        // changing the color of the number based in it's value with ternary operators
        value.style.color = count === 0 ? "#222" : count > 0 ? "green" : "red";
        value.textContent = count;
    });
});
