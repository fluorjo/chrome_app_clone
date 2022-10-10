function plus(a, b){
    console.log(a+b);
}

console.log('--------------------------------');
console.log('plus():',plus());
console.log('--------------------------------');
console.log('plus(9,7):');plus(9,7)

console.log('a:',a);
//함수 안의 변수는 그 안에서만 유효하다. 그래서 지금처럼 a를 밖에서 쓰려고 하면 에러 난다. 