const h1=document.querySelector("div.hello:first-child h1");


function handleh1Click(){
    h1.classList.toggle("clicked");
}
//toggle:h1의 클래스리스트에, ' '의 clicked라는 리스트가 있는지 확인해서, 있으면 제거하고 없으면 추가한다.  


//const clickedClass="clicked";
// if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
// }else{
//     h1.classList.add(clickedClass);
// }


h1.addEventListener('click',handleh1Click);
