const age=99;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
//return 입력 안 해주면 변수 값을 정의, 입력할 수 없음. 그래서 이거 빼고 아래 함수 실행하면 그냥 undefined됨. 

const krAge = calculateKrAge(age);
console.log(krAge);