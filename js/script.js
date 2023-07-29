//burger activation click

const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
});
console.log(burger);