//const age=prompt("how old are you?");

console.log(typeof "11", typeof parseInt("11"));
console.log(typeof parseInt("adad"));

const age=parseInt(prompt("hhhh"));

console.log(isNaN(age));



//
const age=parseInt(prompt("hhhh"));

if(isNaN(age)){
    console.log("숫자 써라");
} else {
    console.log("ok");
}

//

const age=parseInt(prompt("hhhh"));

if(isNaN(age) || age <0){
    console.log("양의숫자 써라");
} else if (age<18){
    console.log("미자");
} else if (age>=18&& age<=50){
    console.log("성인");
} 

else {
    console.log("그만");
}


//
const age=parseInt(prompt("hhhh"));
if (age===100){
    console.log("oooo");
}
