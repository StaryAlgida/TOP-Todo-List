import {clearSectionTitle, clearSectionContent} from "../../clearSection";
import taskRender from "../../renders/singleTaskRender";
import tabTitle from "../../renders/tabTitle";
import tasksContainer from "../../renders/tasksContainer";
import ListOfTasks from "../../taskList";

function thisWeekTab(){
    const button = document.querySelector('#week');
    if(button)
    thisWeekTabListner(button);
}

function thisWeekTabListner(button:Element){
    button.addEventListener('click',()=>{
        clearSectionTitle();
        clearSectionContent();
        tabTitle('This week');
        showTasks();
    });
}

function showTasks(){

    const taksContainer = tasksContainer();
    const list = ListOfTasks.getList();
    list.forEach(task=>{
        if(task.dateStart)
            if(isDateInCurrentWeek(task.dateStart))
                taskRender(task, taksContainer);
    });

    const contener = document.querySelector("#section-content");
    if(contener)
        contener.appendChild(taksContainer);
}


function isDateInCurrentWeek(dateToCheck:string) {
    // Get the current date
    const toCheck = new Date(dateToCheck);
    const currentDate = new Date();
  
    // Calculate the start of the current week (Sunday)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  
    // Calculate the end of the current week (Saturday)
    const endOfWeek = new Date(currentDate);
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(currentDate.getDate() + (7 - currentDate.getDay()));
  
    // Compare the given date with the start and end of the current week
    return toCheck >= startOfWeek && toCheck <= endOfWeek;
  }

export default thisWeekTab;