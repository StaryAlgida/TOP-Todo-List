import Add from '../img/aside/add.svg';
import ListOfTasks from '../taskList'
import taskRender from './taskRender';

function renderToDos(numberOfTasks:number):void{
    const contener = document.querySelector('#todo-container');
    if(contener){
        contener.innerHTML =`<button id="add-button"><img src="${Add}" class="menu-img"> Add task</button>`;
        if(numberOfTasks){
            const list = ListOfTasks.getList();
            list.forEach(task=>{
                taskRender(task);
            });
                
        }
    } 
}

export default renderToDos;