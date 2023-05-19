

// TIME
let timeLabel = document.getElementById('timelabel');

update();

setInterval(update, 1000);

function update(){

let date = new Date();

timeLabel.innerHTML= timeReset(date);
function timeReset(date){
let hours = date.getHours();
let mins = date.getMinutes();
let amOrPm = hours >= 12 ? "pm" : "am";

hours = (hours % 12) || 12;
hours = addZero(hours);
mins = addZero(mins);

return `${hours}:${mins}${amOrPm}`
}
// function to add zeros infront of the hrs or mins when its less than 2
function addZero(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}
// console.log(dateLabel);
}

// Date
dateUpdate();

function dateUpdate(){

const date = new Date();

let week = date.getDate();
let dayLabel = document.getElementById('daylabel');
let mntLabel = document.getElementById('mntlabel');
let atLabel = document.getElementById('atlabel');

dayLabel.innerHTML=getDayInLetterFormat(date);
mntLabel.innerHTML=getMonthInLetterFormat(date);
atLabel.innerHTML= week

function getMonthInLetterFormat(date) {
  const monthIndex = date.getMonth();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  return monthNames[monthIndex];
}

function getDayInLetterFormat(date) {
  const dayIndex = date.getDay();
  const dayNames = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ];
  return dayNames[dayIndex];
}
const monthInLetter = getMonthInLetterFormat(date);
const dayInLetter = getDayInLetterFormat(date);
return` ${ dayInLetter} ${monthInLetter} `;
}
// console.log(monthInLetter); 
// console.log(dayInLetter); 

