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

   // // Скрыть легенду
   // twoAxisChart.options.legend.display = false;
   // twoAxisChart.update();
});
