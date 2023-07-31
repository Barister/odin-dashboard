//burger activation click

const burger = document.querySelector('.burger-menu');
const asidePanel = document.querySelector('.aside');
const logoMobile = document.querySelector('.aside__logoMobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   asidePanel.classList.toggle('active');
   logoMobile.classList.toggle('active');
   body.classList.toggle('active');
});
console.log(asidePanel);