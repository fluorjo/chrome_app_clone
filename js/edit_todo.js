
function submitTextarea(event) {
  let key = event.key || event.keyCode;

  if ((key === "Enter" && !event.shiftKey) || (key === 13 && key !== 16)) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('toDos')));
    
    const textid=Number(event.target.parentNode.id);
    console.log(textid);

    targetData2=JSON.parse(localStorage.getItem('toDos')).filter((toDo) =>toDo.id ===textid);

    targetData2[0].text=event.target.innerText;
    console.log(targetData2);
    const oldobj=JSON.parse(localStorage.getItem('toDos'));

    for (let i = 0; i < oldobj.length; i++) {
      let obj = oldobj[i];
      if (obj.id===targetData2[0].id){
        obj.text= targetData2[0].text;
      }
      localStorage.setItem(TODOS_KEY,JSON.stringify(oldobj));

    }

    return false;
  }
}


let textarea_list = document.querySelectorAll("#todo-div #todo-list li span");
for (let i = 0; i < textarea_list.length; i++) {
  let item = textarea_list.item(i);
  item.addEventListener("keydown", (event) => submitTextarea(event));
}





// event.target.parentElement.innerText 
//<-이걸로 수정 및 확인 같은 것도 할 수 있을 듯.
