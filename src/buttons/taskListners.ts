import {Task} from '../taskObj';

function selectListener(select:HTMLSelectElement, task:Task):void{
    select.addEventListener('change',(event)=>{
        const selectedValue = (event.target as HTMLSelectElement).value;
        task.setPiority(selectedValue);
    });
}

export {selectListener};