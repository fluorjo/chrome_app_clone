const loginForm=document.querySelector('#login-form');

// const loginInput = loginForm.querySelector("input");

// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");

// const loginButton = document.querySelector("#login-form button");

const link = document.querySelector('a');
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = 'hidden'; //string만 표함된 변수는 대문자로 표기하는 관행.
const USERNAME_KEY="username";


//function onLoginSubmit(){
    // console.dir(loginInput);
    // console.log(loginInput.value);
    const username = loginInput.value;
    console.log(username);
    // if(username===""){
    //     alert("please write your name");
    // } else if(username.length>15){
    //     alert("too long")
    // }
    //js에서는 이렇게 관리할 수 있음. 
    //강의에선 html에서 관리하는 방법으로 가서 따라감.
//}

// html에서 관리한다면 
//<input 
//required 
//maxlength="15"
//required는 값을 꼭 입력해야 한다는 것. 
//다만 input이 form 안에 있어야 함. 
//그래서 이 방법 쓰면 입력 요건 미충족시 브라우저가 계속 새로고침됨. form이 자동으로 submit되고 있기 때문. 

//이걸 막는 게 preventDefault. 어떤 이벤트의 기본행동이든 발생하지 않도록 막는 것. 

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;
    // greeting.innerHTML="hello" +username;
    localStorage.setItem(USERNAME_KEY,typedUsername)
    paintGreetings();


}

`Hello ${username}`;
    // alert("clicked");
    //alert은 모든 동작을 막는다(그래서 아무도 안 쓴다?)

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);

} else{
    paintGreetings();

}
