var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



var currentDate = new Date();
var weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var fullDate = weekDay[currentDate.getDay()] + " " + month + "/" + day + "/" + year;
document.getElementById("tanggal").innerHTML = fullDate;

const beranda = document.querySelector('.halaman1');
const potensi2 = document.querySelector('.halaman2');
const sejarah = document.querySelector('.halaman3');
const struktur = document.querySelector('.halaman4');
const tblPotensi = document.getElementById('tblPotensi');
const tblsejarah = document.getElementById('tblsejarah');
const tblberanda = document.getElementById('tblberanda');
const tblstruktur = document.getElementById('tblstruktur');

window.addEventListener('load',function(){
  beranda.classList.remove('halaman1')
})

//beranda
tblberanda.addEventListener('click', function(e){
  potensi2.classList.add('halaman2');
  beranda.classList.remove('halaman1')
  sejarah.classList.add('halaman3')
  struktur.classList.add('halaman4');
  e.preventDefault();
})

//potensi
tblPotensi.addEventListener('click', function(e){
  potensi2.classList.remove('halaman2');
  beranda.classList.add('halaman1')
  sejarah.classList.add('halaman3')
  struktur.classList.add('halaman4');
  e.preventDefault();
})
//sejarah
tblsejarah.addEventListener('click', function(e){
  potensi2.classList.add('halaman2');
  beranda.classList.add('halaman1')
  sejarah.classList.remove('halaman3')
  struktur.classList.add('halaman4');
  e.preventDefault();
})
//struktur
tblstruktur.addEventListener('click', function(e){
  potensi2.classList.add('halaman2');
  beranda.classList.add('halaman1');
  sejarah.classList.add('halaman3');
  struktur.classList.remove('halaman4');
  e.preventDefault();
})