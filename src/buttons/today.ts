import clearSection from '../clearSection';

function createTodoListner(){
    const button = document.querySelector("#today");
    
    if(button)
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");
            const container = document.querySelector("#todo-container");
            if(title&&container){
                title.innerHTML = "Today";

            }
            
            //load tasks with todays date
        });
}

function loadTasks():void{
    const date = Date();
    
    
}

export default createTodoListner;