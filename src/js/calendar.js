const date = new Date();

const years = [2023,2024];
const months = ["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"];
const monthsDaysQuantity = [31,28,31,30,31,30,31,31,30,31,30,31]
const firstday =[6,2,2,5,0,3,5,1,4,6,2,4]

const week = ["пн","вт","ср","чт","пт","сб","нд"];

const weekBlock = document.querySelectorAll(".week__day");

const month = document.querySelector(".calendar__months");
const monthBackBth = document.querySelector('button[data-month="back"]');
const monthForwardBth = document.querySelector('button[data-month="forward"]');

let numberMonths = date.getMonth(); let firstDayMounths=firstday[date.getMonth()];  

let markupMonth=``;

for(let i=0;i<12;i++){
    if(i===date.getMonth()){
        markupMonth=`${months[i]}`;
    }else{continue;}
}


month.insertAdjacentHTML("beforeend", markupMonth);


/////////////////////////////
let w = 0;let d=1; 
function calendarStart(){
    console.log("//////////////////////");
    d=1;

for(let i=0;i<firstDayMounths;i++){
    
    weekBlock[w].insertAdjacentHTML('beforeend',`<div class="day"></div>`);
    

    w++;
    if(w===firstDayMounths){
        for(let i=1;i<=monthsDaysQuantity[numberMonths];i++){
        if(w===7){w=0}

        weekBlock[w].insertAdjacentHTML('beforeend',`<div class="day"><button class="btn" id="day-btn" type="button" data-day="${d}">${d}</button></div>`);
        d++;
        w++;
        }
    }
}
}
////////////////////

function monthBack(){
    monthForwardBth.disabled=false;
    month.innerHTML = '';

    markupMonth=`${months[months.indexOf(markupMonth)-1]}`;
    month.insertAdjacentHTML("beforeend", markupMonth);
    if(markupMonth===months[0]){
        monthBackBth.disabled=true;
    }
    ///////////////////////

    numberMonths -=1;
    firstDayMounths=firstday[numberMonths];

    // for(let i=0;i<7;i++){
    //     weekBlock[i].remove();
    // }

    calendarStart();
}
function monthForward(){
    monthBackBth.disabled=false;
    month.innerHTML = '';

    markupMonth=`${months[months.indexOf(markupMonth)+1]}`;
    month.insertAdjacentHTML("beforeend", markupMonth);
    if(markupMonth===months[11]){
        monthForwardBth.disabled=true;
    }
    ////////////////////////////

    numberMonths +=1;
    firstDayMounths=firstday[numberMonths];

    // for(let i=0;i<7;i++){
    //     weekBlock[i].remove();
    // }

    calendarStart();
}


monthBackBth.addEventListener('click', monthBack);
monthForwardBth.addEventListener('click', monthForward);

//запуск страниці
document.addEventListener("DOMContentLoaded", calendarStart);

const allDAYS = document.querySelectorAll(".btn");
console.log(allDAYS);
for(let i=0;i<31;i++){
    console.log( allDAYS[i]);
}

/////////////////////////
/////////////////////////////
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import axios from 'axios';
// import { createValueMarkup, addAlreadyReadMarkup } from './markup';

// const inputCalendarEl = document.querySelector('.calendar-inp');
// const svgOpenEl = document.querySelector('.svg-open-calendar');
// const inputEl = document.querySelector('.search-input');
// const KEY = 'RX66xbpKTOQTP8uW8ejKF6pod0BTlz7b';
// const value = inputEl.value;
// let day;
// let year;
// let month;
// const options = {
//   disableMobile: 'true',
//   dateFormat: 'd/m/Y',
//   defaultDate: new Date(),
//   onClose(selectedDates) {
//     svgOpenEl.classList.remove('is-rotate-svg');
//     const selectedDate = selectedDates[0];
//     day = String(selectedDate.getDate()).padStart(2, '0');
//     month = String(selectedDate.getMonth() + 1).padStart(2, '0');
//     year = selectedDate.getFullYear();

//     getNewsByDate(inputEl.value).then(data => {
//       createValueMarkup(data);
//       addAlreadyReadMarkup();
//     });
//   },
//   onOpen() {
//     svgOpenEl.classList.add('is-rotate-svg');
//   },
// };
// // Вызов библиотеки чтоб в инпуте появился календарь
// flatpickr(inputCalendarEl, options);

// async function getNewsByDate(value) {
//   try {
//     const res =
//       await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${KEY}&facet_fields=section_name&facet_filter=true&begin_date=${year}${month}${day}&end_date=${year}${month}${day}
// `);
//     return res.data.response;
//   } catch (error) {
//     console.log(error);
//   }
// }