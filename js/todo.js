const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="toDos"
const DONE_TODOS_KEY="done_toDos_array"

let toDos= [];
let done_toDos_array= [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function saveDoneTodos(){
    console.log(toDos);
    done_toDos_array=toDos.filter((toDo) => toDo.done ===true);
    localStorage.setItem(DONE_TODOS_KEY,JSON.stringify(done_toDos_array));
}

function deleteTodo(event) {
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    saveTodos();

    done_toDos_array=done_toDos_array.filter((toDo) => toDo.id !==parseInt(li.id));
    saveDoneTodos();

}
//완료
function doneTodo(event) {
    const li=event.target.parentElement;
    const span=li.querySelector('span')

    span.classList.add('class_done');
    targetData=toDos.filter((toDo) => toDo.id ==li.id);
    targetData[0].done=true;
    saveTodos();
    saveDoneTodos();

}
//수정

// event.target.parentElement.innerText 
//<-이걸로 수정 및 확인 같은 것도 할 수 있을 듯.

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;

    const button = document.createElement("button");
    button.innerText="❎";
    button.addEventListener('click',deleteTodo);
    
    //완료
    const button_done = document.createElement("button_done");
    button_done.innerText="✔️";
    button_done.addEventListener('click',doneTodo);

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(button_done);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";

    let newTodoObj ={
        text:newTodo,
        id:Date.now(),
        done:new Boolean(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener('submit',handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintTodo)


}