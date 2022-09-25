const player = {
    name:"aa",
    points:10,
    fat:false,
};

console.log('--------------------------------');
console.log('player:',player);
console.log('player.name:',player.name);
console.log('player["name"]:',player["name"]);

console.log('--------------------------------');
player.points=88;

console.log('player.points:',player.points);
//player가 const이지만 player.point 수정 가능. player가 아닌 안의 object를 수정하기 때문(?)

console.log('--------------------------------');
player=22
//이런식으로 player 자체를 바꾸려고 할 때 에러가 생기는 것. 