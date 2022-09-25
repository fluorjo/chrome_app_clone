const player = {
    name:"aa",
    hello: function(name2){
        //밖에서 쓸 때랑 좀 다른 거 주의.
        console.log("hello"+name2)
    },
};

console.log('--------------------------------');
console.log('player.hello():',player.hello());
player.hello("gg");