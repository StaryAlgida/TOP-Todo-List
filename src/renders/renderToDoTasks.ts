import ListOfTasks from '../taskList'
import Add from '../img/aside/add.svg';
import startEndListners from '../buttons/startEndDate';

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

                    const start = document.createElement('span');
                    start.innerHTML=`Start: No date`;
                    start.classList.add('start-date');
                    
                    const end = document.createElement('span')
                    end.innerHTML=`End: No date`;
                    end.classList.add('end-date');

                    startEndListners(start, end, task);

                    div.innerHTML = `
                    <button id="is-done-button">Done</button>
                    <h2>${task.taskName}</h2>
                    <div class="piority">
                        <span>Piority:</span>
                        <select id="cars" name="cars">
                            <option value="low" selected>low</option>
                            <option value="medium">medium</option>
                            <option value="hight">hight</option>
                        </select>
                    </div>`;
                    contener.appendChild(div);
                    contener.appendChild(start);
                    contener.appendChild(end);
                });
                
            }
        }
    
    
}
//<input type="date" id="end"/>
export default renderToDos;