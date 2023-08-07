import './style.css';
import webInit from './web_init';
import createTodoListner from './buttons/toDo';
import today from './buttons/today';
import week from './buttons/week';

window.onload = () =>{
    webInit();
    createTodoListner();
    today();
    week();
}