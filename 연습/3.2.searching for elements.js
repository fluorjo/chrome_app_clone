const hellos=document.getElementsByClassName('hello');

console.log(hellos);

const ti= document.querySelector(".he h1");
console.log(ti);
/*이렇게 하면 설령 he 클래스에 h1이 여러 개 있어도 맨 앞에 거 하나만 선택된다. */

const ti3= document.querySelector(".he h1:first-child");
console.log(ti3);
/**이렇게도 가능.*/

const ti4= document.querySelector("#gg h1");
console.log(ti4);
/*id로 찾기*/

const ti2= document.querySelectorAll(".he h1");
console.log(ti2);
/*이러면 배열로 가져옴.*/

ti.innerText="wow";
/*he div의 첫번째 h1만 wow로 바꿈. */
