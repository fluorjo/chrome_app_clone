
JSON.parse(localStorage.getItem('toDos'));

function submitTextarea(event) {
  let key = event.key || event.keyCode;

  if ((key === "Enter" && !event.shiftKey) || (key === 13 && key !== 16)) {
    event.preventDefault();
    console.log(textarea.innerText);
    console.log(JSON.parse(localStorage.getItem('toDos')));
    
    //var mm=this.parentNode;
    const textid=Number(textarea.parentNode.id);
    console.log(typeof(textid));
    console.log(typeof(JSON.parse(localStorage.getItem('toDos'))[0].id));
    
    targetData2=JSON.parse(localStorage.getItem('toDos')).filter((toDo) =>toDo.id ===textid);

    console.log(targetData2);
    targetData2[0].text=textarea.innerText;
    return false;
  }
}
function prohibitEnter(event) {
  let key = event.key || event.keyCode;

  if ((key === "Enter" && !event.shiftKey) || (key === 13 && key !== 16)) {
    event.preventDefault();
    return false;
  }
}

let textarea = document.querySelector("#todo-div #todo-list");
textarea.addEventListener("keydown", (event) => prohibitEnter(event));

let textarea_list = document.querySelector("#todo-div #todo-list li span");
for (const i = 0; i < textarea_list.length; i++) {
  const item = textarea_list.item(i);
  item.addEventListener("keydown", (event) => submitTextarea(event));
}





// event.target.parentElement.innerText 
//<-이걸로 수정 및 확인 같은 것도 할 수 있을 듯.
