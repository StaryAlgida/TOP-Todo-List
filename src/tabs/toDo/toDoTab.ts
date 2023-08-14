import tabTitle from "../../renders/tabTitle";
import {addTaskButton, renderAddTaskForm} from "../../renders/addTaskButtonAndForm";
import {clearSectionTitle, clearSectionContent} from "../../clearSection";
import ListOfTasks from "../../taskList";
import {createTask} from '../../taskObj';
import taskRender from "../../renders/singleTaskRender";
import tasksContainer from "../../renders/tasksContainer";

function todo():void{
    const toDobutton = document.querySelector("#to-do");
    
    if(toDobutton){
        toDoListner(toDobutton);
    }
}

function toDoListner(button:Element){
    button.addEventListener('click',()=>{
        clearSectionTitle();
        tabTitle('To Do');
        todoDefaultView();
    });
}

function todoDefaultView(){
    clearSectionContent();
    const contener = document.querySelector("#section-content");
    if(contener){
        const addTask:Element = addTaskButton();
        addTaskButtonListner(addTask);
        
        
        const taskContainer = tasksContainer();
        renderTasks(taskContainer);

        contener.appendChild(addTask);
        contener.appendChild(taskContainer);

    }
}

function addTaskButtonListner(button:Element){
    button.addEventListener('click',()=>{
        renderAddTaskForm();
        const add = document.querySelector('#add');
        const cencle = document.querySelector('#cencle');
        if(add&&cencle){
            cencleButton(cencle);
            addButton(add);
        }
    });
}

function addButton(button:Element):void{
    button.addEventListener('click',()=>{
        const input = document.querySelector("#add-todo") as HTMLInputElement ;
        const name = input.value;
        if(name){
            ListOfTasks.setTask(createTask(ListOfTasks.getSize(), name, 'low', false, undefined, undefined));
            todoDefaultView();
        }    
    });
}

function cencleButton(button:Element):void{
    button.addEventListener('click',()=>{
        todoDefaultView();
    });
}

function renderTasks(container:Element):void{
    const list = ListOfTasks.getList();
    list.forEach(task=>{
        taskRender(task, container);
    });
}

export default todo;