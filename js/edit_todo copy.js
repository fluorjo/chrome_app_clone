const savedToDos2 = localStorage.getItem('toDos');
const parsedToDos2 = JSON.parse(savedToDos2);

function submitTextarea(event) {
  let key = event.key || event.keyCode;

  if ((key === "Enter" && !event.shiftKey) || (key === 13 && key !== 16)) {
    event.preventDefault();
    console.log(textarea.innerText);
    console.log(parsedToDos2);
    
    //var mm=this.parentNode;
    const textid=Number(textarea.parentNode.id);
    console.log(typeof(textid));
    console.log(typeof(parsedToDos2[0].id));
    
    targetData2=parsedToDos2.filter((toDo) =>toDo.id ===textid);

    console.log(targetData2);
    targetData2[0].text=textarea.innerText;
    return false;
  }
}

let textarea = document.querySelector("#todo-div #todo-list");
textarea.addEventListener("keydown", (event) => submitTextarea(event));
// event.target.parentElement.innerText 
//<-이걸로 수정 및 확인 같은 것도 할 수 있을 듯.
