import Add from '../img/aside/add.svg'

function addTaskButton():Element{
    const addButton = document.createElement('button');
    addButton.id = 'add-button';
    addButton.innerHTML = `<img src="${Add}" class="menu-img"> Add task`;
    return addButton;
}

function renderAddTaskForm():void{
    const container = document.querySelector("#section-content");
    if(container)
        container.innerHTML=`
                <input maxlength="30" id="add-todo" type="text" autofocus>
                <div id="add-todo-buttons">
                    <button id="add">Add</button>
                    <button id="cencle">Cencle</button>
                </div>`;
}


export {addTaskButton, renderAddTaskForm};