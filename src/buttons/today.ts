import clearSection from '../clearSection';

function createTodoListner(){
    const button = document.querySelector("#today");
    
    if(button)
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");
            if(title)
                title.innerHTML = "Today";
            
            //load tasks with todays date
        });
}

export default createTodoListner;