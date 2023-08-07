import clearSection from '../clearSection';
import {renderToDo, renderAddTaskForm} from '../forms/renderToDo';

function createTodoListner():void{
    const button = document.querySelector("#to-do");
    
    if(button){
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");
            const container = document.querySelector("#section-content");

            if(title&&container){
                renderToDo(container, title);
                
                const addButton = document.querySelector("#add-button");
                
                if(addButton){
                    addTaskListner(addButton);
                }
            }
            
        });
    }
}

function addTaskListner(button:Element):void{
    button.addEventListener('click',()=>{
        const container = document.querySelector("#todo-container");
        if(container){
            
            renderAddTaskForm(container);

            const add = document.querySelector('#add');
            const cencle = document.querySelector('#cencle');

            if(add&&cencle){
                cencleAdd(cencle);
            }
        }
    });
}

function cencleAdd(button:Element):void{
    button.addEventListener('click',()=>{
        const container = document.querySelector("#section-content");
        if(container){
            renderToDo(container)
            const addButton = document.querySelector("#add-button");    
            if(addButton){
                addTaskListner(addButton);
            }
        }
    });
}

export default createTodoListner;