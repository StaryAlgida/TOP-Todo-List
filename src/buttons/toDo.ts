import Add from '../img/aside/add.svg';
import clearSection from '../clearSection';

function createTodoListner(){
    const button = document.querySelector("#to-do");
    
    if(button)
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");
            const contener = document.querySelector("#section-content");

            if(title&&contener){
                title.innerHTML = "To Do";
                contener.innerHTML= `<div class="todo-button"><button><img src="${Add}" class="menu-img"> Add task</button></div>`
            }
            
        });
}

export default createTodoListner;