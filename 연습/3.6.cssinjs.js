const h1=document.querySelector("div.hello:first-child h1");

h1.style.color="blue";

// function handleh1Click(){
//     if(h1.style.color === "blue"){
//         h1.style.color = 'red';
//     } else{
//         h1.style.color='blue';
//     }
// }

function handleh1Click(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = 'red';
    } else{
        newColor='blue';
    }
    h1.style.color=newColor;
}




h1.addEventListener('click',handleh1Click);

