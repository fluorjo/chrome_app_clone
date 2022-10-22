const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const weekarr=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const weeknum=date.getDay()
  const week=weekarr[weeknum];
  const months= String(date.getMonth()+1);
  const days= String(date.getDate());
  const years= String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${week} ${months}/${days}/${years} ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

console.log(Date());

