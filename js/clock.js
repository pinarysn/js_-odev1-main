function showTime() {
  let info = document.querySelector("#myClock");
  var trh = new Date();
  var saat = trh.getHours();
  var dakika = trh.getMinutes();
  var saniye = trh.getSeconds();
  info.innerHTML = `${saat} : ${dakika} : ${saniye}`;
  setTimeout(showTime, 1000);
}
function showDate() {
  let info2 = document.querySelector("#myDate");
  var trh = new Date();
  var gn = trh.getDate();

  if (trh.getMonth() <= 9) {
    var ay = `0${trh.getMonth() + 1}`;
  }

  var yil = trh.getFullYear();

  info2.innerHTML = `${gn} : ${ay} : ${yil}`;
  setTimeout(showDate, 1000);
  console.log(ay);
}

showTime();
showDate();
