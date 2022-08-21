const questionContainer = document.querySelector(".section-center");

questionContainer.addEventListener("click", (event) => {
    const question = event.target.closest(".question");
    if (event.target.parentElement.classList.contains("plus-icon")
        || event.target.parentElement.classList.contains("minus-icon")) {
        question.classList.toggle("show-text");
    }
});
