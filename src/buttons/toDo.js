import Add from '../img/aside/add.svg';
import clearSection from '../clearSection';

function createTodoListner(){
    const button = document.querySelector("#to-do");
    
    button.addEventListener('click',()=>{
        clearSection();
        const title = document.querySelector("#section-title");
        title.innerText = "To Do";
        
        const contener = document.querySelector("#section-content");
        contener.innerHTML= `<div class="todo-button"><button><img src="${Add}" class="menu-img"> Add task</button></div>`
    });
}

export default createTodoListner;