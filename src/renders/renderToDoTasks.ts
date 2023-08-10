import Add from '../img/aside/add.svg';
import doneFalse from '../img/doneFalse.svg';
import doneTrue from '../img/doneTrue.svg';
import ListOfTasks from '../taskList'
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
                    selectDiv.appendChild(select);

                    const dateStartContainer = document.createElement('div');
                    dateStartContainer.innerHTML = `Start:`;
                    const dateEndContainer = document.createElement('div');
                    dateEndContainer.innerHTML = `End:`;
                    
                    makeStart(task, dateStartContainer);
                    makeEnd(task, dateEndContainer);
                    // const dateStart = makeStart(task, dateStartContainer);
                    // const dateEnd = makeEnd(task, dateEndContainer);

                    // const start = document.createElement('span');
                    // start.innerHTML=`Start: No date`;
                    // start.classList.add('start-date');
                    
                    // const end = document.createElement('span')
                    // end.innerHTML=`End: No date`;
                    // end.classList.add('end-date');

                    // startEndListners(start, end, task);

                    

                    // div.appendChild(start);
                    // div.appendChild(end);
                    div.appendChild(doneButton);
                    div.appendChild(title);
                    div.appendChild(selectDiv);
                    div.appendChild(dateStartContainer);
                    div.appendChild(dateEndContainer);
                    contener.appendChild(div);
                    
                });
                
            }
        }
    
    
}

function makeDoneButton(task:Task):Element{
    const doneButton = document.createElement('button');
    doneButton.classList.add("done-button")
    if(task.getDone()){
        doneButton.innerHTML = `<img src=${doneTrue}>`;
    }
    else{
        doneButton.innerHTML = `<img src=${doneFalse}>`;
    }
    
    doneButton.addEventListener('click',()=>{
        if(task.getDone()){
            doneButton.innerHTML = `<img src=${doneFalse}>`
            task.setDone(false);
        }
        else{
            doneButton.innerHTML = `<img src=${doneTrue}>`
            task.setDone(true);
        }
    })

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

function makeStart(task:Task, contaner:Element):void{
    const span = document.createElement('span');
    contaner.innerHTML = `Start: `;
    
    if(task.dateStart){
        span.innerHTML  = ` ${task.dateStart}`;
    }
    else{
        span.innerHTML  = `No date`;
    }
    contaner.appendChild(span);

    span.addEventListener('click',()=>{
        const input = document.createElement('input') as HTMLInputElement;
        input.type = 'date';
        contaner.innerHTML = `Start: `;
        contaner.appendChild(input);

        input.addEventListener('change',()=>{
            task.dateStart = `${input.value}`;
            console.log(`Start: ${input.value}`);
            
            makeStart(task, contaner);
        });
    });

}

function makeEnd(task:Task, contaner:Element):void{
    const span = document.createElement('span');
    contaner.innerHTML = `End: `;
    
    if(task.dateEnd){
        span.innerHTML  = ` ${task.dateEnd}`;
    }
    else{
        span.innerHTML  = `No date`;
    }
    contaner.appendChild(span);

    span.addEventListener('click',()=>{
        const input = document.createElement('input') as HTMLInputElement;
        input.type = 'date';
        contaner.innerHTML = `End: `;
        contaner.appendChild(input);

        input.addEventListener('change',()=>{
            task.dateEnd = `${input.value}`;
            console.log(`Start: ${input.value}`);
            
            makeEnd(task, contaner);
        });
    });
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