import {clearSectionTitle, clearSectionContent} from "../../clearSection";
import taskRender from "../../renders/singleTaskRender";
import tabTitle from "../../renders/tabTitle";
import tasksContainer from "../../renders/tasksContainer";
import ListOfTasks from "../../taskList";

function todayTab(){
    const button = document.querySelector('#today');
    if(button)
        todayTabListner(button);
}

function todayTabListner(button:Element){
    button.addEventListener('click',()=>{
        clearSectionTitle();
        clearSectionContent();
        tabTitle('Today');
        showTasks();
    });
}

function showTasks(){
    const date:Date = new Date();
    const today = `${date.toJSON().slice(0,10)}`;
    const list = ListOfTasks.getList();
    const taksContainer = tasksContainer();

    list.forEach(task=>{
        console.log(today === task.dateStart);
        if(today === task.dateStart)
            taskRender(task, taksContainer);
    });

    const contener = document.querySelector("#section-content");
    if(contener)
        contener.appendChild(taksContainer);

}

export default todayTab;