const loginForm=document.querySelector('.login-form');

// const loginInput = loginForm.querySelector("input");

// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector(".login-form input");

const link = document.querySelector('a');
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = 'hidden'; //

const USERNAME_KEY="username";

const loginbg = document.querySelector(".login");

    const username = loginInput.value;
    console.log(username);

function onLoginSubmit(event){
    event.preventDefault();

    loginbg.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;
    // greeting.innerHTML="hello" +username;
    localStorage.setItem(USERNAME_KEY,typedUsername)
    paintGreetings(typedUsername);
}

function paintGreetings(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginbg.classList.remove(HIDDEN_CLASSNAME);
    
    loginForm.addEventListener('submit',onLoginSubmit);

} else{
    paintGreetings(savedUsername);

}
//--------------------------------------------//

