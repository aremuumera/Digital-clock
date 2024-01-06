const day = document.getElementById('day');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('sec');
const todayDate = document.querySelector('.today-date');


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const date = new Date();
console.log(date);
const days = Days[date.getDay()];
const dates = date.getDate();
const Month = months[date.getMonth()];
const FullYear = date.getFullYear();
todayDate.innerHTML =  `Today's date: ${days} ${dates} ${Month}, ${FullYear}`;


setInterval(() => {
const date = new Date()

hrs.innerHTML = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
mins.innerHTML = (date.getMinutes( ) < 10 ? '0' + date.getMinutes() : date.getMinutes());
secs.innerHTML = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
},1000);