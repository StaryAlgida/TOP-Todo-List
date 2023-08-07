import Add from '../img/aside/add.svg';
import clearSection from '../clearSection';

function createTodoListner(): void{
    const button = document.querySelector("#to-do");
    
    if(button){
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");
            const contener = document.querySelector("#section-content");

            if(title&&contener){
                title.innerHTML = "To Do";
                contener.innerHTML= `<div id="todo-container"><button id="add-button"><img src="${Add}" class="menu-img"> Add task</button></div>`
                
                const addButton = document.querySelector("#todo-container");
                
                if(addButton){
                    addButtonListner(addButton);
                }
            }
            
        });
    }
}


function addButtonListner(button :Element) :void{
    button.addEventListener('click',()=>{
        console.log("ok");
         const containier = document.querySelector("#todo-container");
         if(containier)
            containier.innerHTML=`<input type="text" autofocus>
        <button id="add">Add</button>
        <button id="cencle">Cencle</button>`;
    });
}

export default createTodoListner;