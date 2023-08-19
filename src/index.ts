import './style.css';
import webInit from './web_init';
import todo from './tabs/toDo/toDoTab';
import todayTab from './tabs/today/todayTab';
import thisWeekTab from './tabs/thisWeek/thisWeekTab';
import addProject from './tabs/addProject/addProjectTab';


window.onload = () =>{
    webInit();
    todo();
    todayTab();
    thisWeekTab();
    addProject();
    // init buttons listners
}
