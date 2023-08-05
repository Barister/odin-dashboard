
const burger = document.querySelector('.burger-menu');
const asidePanel = document.querySelector('.aside');
const logoMobile = document.querySelector('.aside__logoMobile');
const body = document.querySelector('body');

function toggleActiveClass() {
   burger.classList.toggle('active');
   asidePanel.classList.toggle('active');
   logoMobile.classList.toggle('active');
   body.classList.toggle('active');
}

function addActiveClass() {
   burger.classList.add('active');
   asidePanel.classList.add('active');
   logoMobile.classList.add('active');
   body.classList.add('active');
}

//burger activation click
burger.addEventListener('click', toggleActiveClass);

//burger activation if screen width < 606px;

function checkWindowWidth() {
   if (window.innerWidth < 607) {
      addActiveClass();
      window.removeEventListener('resize', checkWindowWidth);
   }
}

window.addEventListener('DOMContentLoaded', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);


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
//console.log("Today is", formattedDate);

todayBlock.textContent = formattedDate;


//total-revenue__graph

document.addEventListener("DOMContentLoaded", function () {
   // Получить элемент canvas для рисования графика
   var ctx = document.getElementById("two-axis-chart").getContext("2d");

   // Данные для оси X
   var labels = ["0", "4", "8", "12", "16", "20", "24", "28"];

   // Данные для "Rents collected"
   var rentsData = [120, 150, 180, 190, 180, 175, 180, 160];

   // Данные для "Expenses"
   var expensesData = [80, 100, 90, 97, 63, 100, 77, 100];

   // Создать двухосевую диаграмму
   var twoAxisChart = new Chart(ctx, {
      type: "line",
      data: {
         labels: labels,
         datasets: [
            {
               label: "Rents collected",
               data: rentsData,
               borderColor: "#4d2cee",
               //backgroundColor: "rgba(0, 123, 255, 0.2)",
               fill: false,
            },
            {
               label: "Expenses",
               data: expensesData,
               borderColor: "#31c240",
               //backgroundColor: "rgba(220, 53, 69, 0.2)",
               fill: false,
            },
         ],
      },
      options: {
         maintainAspectRatio: false,
         scales: {
            x:
            {
               ticks: {
                  beginAtZero: true,
                  stepSize: 4,
               },
            },

            y:
            {
               ticks: {
                  beginAtZero: true,
                  max: 200,
                  stepSize: 100,
                  callback: function (value, index, ticks) {
                     return '$' + value;
                  },
               },
            },

         },
         plugins: {
            legend: false,
         }
      },
   });

});
