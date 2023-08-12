import clearSection from '../clearSection';
import { renderToDo } from '../renders/renderToDo';
import taskRender from '../renders/taskRender';
import ListOfTasks from '../taskList';

function createTodoListner(){
    const button = document.querySelector("#today");
    
    if(button)
        button.addEventListener('click',()=>{
            console.log('today');
            
            clearSection();
            renderToDo(true);
            
            const title = document.querySelector("#section-title");
            const container = document.querySelector("#todo-container");
            if(title&&container){
                title.innerHTML = "Today";
                loadTasks();
            }
            
            //load tasks with todays date
        });
}

function loadTasks():void{
    const date:Date = new Date();
    const today = `${date.toJSON().slice(0,10)}`;
    const list = ListOfTasks.getList();

    list.forEach(task=>{
        if(task.dateStart === today)
            taskRender(task);
    });
}

export default createTodoListner;