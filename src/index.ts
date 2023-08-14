import './style.css';
import webInit from './web_init';
import todo from './tabs/toDo/toDoTab';
import todayTab from './tabs/today/todayTab';
import thisWeekTab from './tabs/thisWeek/thisWeekTab';


window.onload = () =>{
    webInit();
    todo();
    todayTab();
    thisWeekTab();
    // init buttons listners
}
