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
//console.log(asidePanel);p


//today date

const todayBlock = document.querySelector('.greetings__weekday-time');


function formatDate(date) {
   const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
   };

   return date.toLocaleDateString('en-US', options);
}

const today = new Date();
const formattedDate = formatDate(today);
console.log("Today is", formattedDate);

todayBlock.textContent = formattedDate;