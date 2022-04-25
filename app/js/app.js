const questions = document.querySelectorAll('.text-group');
const questionsBtn = document.querySelectorAll('.open');

questionsBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
        questions[i].classList.toggle('active');
    })
});