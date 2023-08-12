import clearSection from '../clearSection';
import {renderToDo, renderAddTaskForm} from '../renders/renderToDo';
import {createTask} from '../taskObj';
import ListOfTasks from '../taskList';

function createTodoListner():void{
    const button = document.querySelector("#to-do");
    
    if(button){
        button.addEventListener('click',()=>{
            clearSection();
            renderToDo(true, true, true);
            addTaskListner();
        });
    }
}

function addTaskListner():void{
    const button = document.querySelector("#add-button")
    if(button)
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
            renderToDo(true, false, true);
            addTaskListner();
        }
            
    });
}

function cencleButton(button:Element):void{
    button.addEventListener('click',()=>{
        renderToDo(true, false, true);
        addTaskListner();
    });
}

export default createTodoListner;