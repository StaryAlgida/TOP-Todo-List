import clearSection from '../clearSection';

function week(){
    const button = document.querySelector("#week");

    if(button){
        button.addEventListener('click',()=>{
            clearSection();
            const title = document.querySelector("#section-title");

            if(title){
                title.innerHTML = "This week";
            }
        });
    }
}

export default week;