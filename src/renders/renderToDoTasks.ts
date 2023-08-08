import ListOfTasks from '../taskList'
import Add from '../img/aside/add.svg';
import {startEndListners, selectListener} from '../buttons/taskListners';
import { Task } from '../taskObj';

function renderToDos(numberOfTasks:number):void{
    const contener = document.querySelector('#todo-container');
        if(contener){
            contener.innerHTML =`<button id="add-button"><img src="${Add}" class="menu-img"> Add task</button>`;
        
            if(numberOfTasks){
                const list = ListOfTasks.getList();
                list.forEach(task=>{
                    const div = document.createElement('div');
                    div.id = `${task.id}`;
                    div.classList.add('task');
                    
                    const selectDiv = document.createElement('div');
                    selectDiv.classList.add('piority');
                    selectDiv.innerHTML = `<span>Piority:</span>`;

                    const doneButton = makeDoneButton(task);

                    const title = makeTitle(task);
                    const select = makeSelect(task);
                    
                    selectDiv.appendChild(doneButton)
                    selectDiv.appendChild(title);
                    selectDiv.appendChild(select);

                    // const start = document.createElement('span');
                    // start.innerHTML=`Start: No date`;
                    // start.classList.add('start-date');
                    
                    // const end = document.createElement('span')
                    // end.innerHTML=`End: No date`;
                    // end.classList.add('end-date');

                    // startEndListners(start, end, task);

                    

                    // div.appendChild(start);
                    // div.appendChild(end);
                    div.appendChild(selectDiv);
                    contener.appendChild(div);
                    
                });
                
            }
        }
    
    
}

function makeDoneButton(task:Task):Element{
    const doneButton = document.createElement('button');

    return doneButton;
}

function makeTitle(task:Task):Element{
    const title = document.createElement('h2');
    title.innerHTML = `${task.getTaskName()}`;
    return title;
}

function makeSelect(task:Task):Element{
    
    const select = document.createElement('select') as HTMLSelectElement;
    select.classList.add('piority');
    select.name = 'task-pioryty';
    if(task.piority === 'medium'){
        select.innerHTML = `
        <option value="low">low</option>
        <option value="medium" selected>medium</option>
        <option value="hight">hight</option>`;
    }
    else if(task.piority === 'hight'){
        select.innerHTML = `
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="hight" selected>hight</option>`;
    }
    else{
        select.innerHTML = `
        <option value="low" selected>low</option>
        <option value="medium">medium</option>
        <option value="hight">hight</option>`;
    }
    selectListener(select, task);
    return select
}


//<input type="date" id="end"/>
export default renderToDos;



// div.innerHTML = `
//                     <button id="is-done-button">Done</button>
//                     <h2>${task.taskName}</h2>
//                     <div class="piority">
//                         <span>Piority:</span>
//                         <select class="piority" name="task-pioryty">
//                             <option value="low" selected>low</option>
//                             <option value="medium">medium</option>
//                             <option value="hight">hight</option>
//                         </select>
//                     </div>`;