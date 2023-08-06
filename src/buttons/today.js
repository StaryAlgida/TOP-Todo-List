import clearSection from '../clearSection';

function createTodoListner(){
    const button = document.querySelector("#today");
    
    button.addEventListener('click',()=>{
        clearSection();
        const title = document.querySelector("#section-title");
        title.innerText = "Today";
        
        //load tasks with todays date
    });
}

export default createTodoListner;