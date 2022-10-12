const h1=document.querySelector("div.hello:first-child h1");
/*주의:이거 hello 앞에 다른 div 있으면 에러남. fisrt-child 때문에 그런 듯? 저걸 지워주면 앞에 다른 게 있어도 괜찮음. */
console.dir(h1);

h1.style.color="blue";

function handleh1Click(){
    console.log('h1 was clicked');
}

h1.addEventListener('click',handleh1Click);

/*위에는 괄호 있고, 아래는 없는 거 주의. 
괄호는 이걸 실행시킨다는 의미인데, 지금 우리는 클릭할 때 실행되길 원하지 function이 바로 실행되길 원하지 않기 때문.*/

function handleMouseEnter(){
    h1.innerText="mouse is here"

}
function handleMouseLeave(){
    h1.innerText="mouse is not here"
}


h1.addEventListener('mouseenter',handleMouseEnter);
h1.addEventListener('mouseleave',handleMouseLeave);


// h1.onclick=handleh1Click;
// h1.onmouseenter=handleMouseEnter;
//이렇게도 쓸 수 있다. 다만 앞에 걸 선호하는 이유는

// .removeEventListener
//이런 식으로 지워줄 수도 있기 때문.

function handlewindowResize(){
    document.body.style.backgroundColor ="red";
}

window.addEventListener("resize",handlewindowResize);

function handlewindowCopy(){
    alert("copier");
}

window.addEventListener("copy",handlewindowCopy);

function handleWindowOffline(){
    alert("SOS no wifi");
}
window.addEventListener('offline',handleWindowOffline);


function handleWindowOnline(){
    alert("good");
}
window.addEventListener('Online',handleWindowOnline);