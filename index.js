function ShowTime(){
var d = new Date();
var weekday = new Array(7);
let tdate = new Date().toLocaleDateString()
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(tdate)
var dayis = weekday[d.getDay()];
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById('time').innerText = time;
  document.getElementById('dayis').innerText = dayis;
  document.getElementById('date').innerText = tdate;
  setTimeout("ShowTime()",100)
}

function ShowText() {
let x = document.getElementById('in').value
document.getElementById('showtext').innerText = x;
}
