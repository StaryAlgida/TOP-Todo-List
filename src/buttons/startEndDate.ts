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

export default startEndListners;