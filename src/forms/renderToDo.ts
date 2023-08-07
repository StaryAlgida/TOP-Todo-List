import Add from '../img/aside/add.svg';

function renderToDo(container?:Element ,title?:Element):void{
    if(title)
        title.innerHTML = "To Do";
    if(container)
        container.innerHTML= `<div id="todo-container"><button id="add-button"><img src="${Add}" class="menu-img"> Add task</button></div>`
}

function renderAddTaskForm(container:Element):void{
    container.innerHTML=`
            <input id="add-todo" type="text" autofocus>
            <div id="add-todo-buttons">
                <button id="add">Add</button>
                <button id="cencle">Cencle</button>
            </div>`;
}

export {renderToDo, renderAddTaskForm};