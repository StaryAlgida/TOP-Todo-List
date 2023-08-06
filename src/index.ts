import './style.css';
import webInit from './web_init';
import createTodoListner from './buttons/toDo';
import today from './buttons/today';


window.onload = () =>{
    webInit();
    createTodoListner();
    today();
}