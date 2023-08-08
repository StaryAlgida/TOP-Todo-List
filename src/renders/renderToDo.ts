import renderToDos from '../renders/renderToDoTasks'
import ListOfTasks from '../taskList';

function renderToDo(isContainer:boolean ,isTitle:boolean):void{
    const title = document.querySelector("#section-title");
    const container = document.querySelector("#section-content");
    if(title&&container){
        if(isTitle)
            title.innerHTML = "To Do";
        if(isContainer){
            container.innerHTML= `<div id="todo-container"></div>`
            renderToDos(ListOfTasks.getSize());
        }
    }
    
}

function renderAddTaskForm():void{
    const container = document.querySelector("#todo-container");
    if(container)
        container.innerHTML=`
                <input maxlength="30" id="add-todo" type="text" autofocus>
                <div id="add-todo-buttons">
                    <button id="add">Add</button>
                    <button id="cencle">Cencle</button>
                </div>`;
}

export {renderToDo, renderAddTaskForm};