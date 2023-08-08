import {Task} from '../taskObj';

function startEndListners(start:Element, end:Element, e:Task):void{
    
    if(start&&end){
        start.addEventListener('click',()=>{
            start.innerHTML=`<input type="date" id="start"/>`
        });

        end.addEventListener('click',()=>{
            end.innerHTML=`<input type="date" id="end"/>`
        });
    }
}

function selectListener(select:HTMLSelectElement, task:Task):void{
    select.addEventListener('change',(event)=>{
        const selectedValue = (event.target as HTMLSelectElement).value;
        task.setPiority(selectedValue);
    });
}

export {startEndListners, selectListener};