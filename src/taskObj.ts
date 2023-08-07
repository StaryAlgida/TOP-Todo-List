interface Task{
    id:number;
    taskName: string;
    piority: string;
    done: boolean;
    dateStart?: string;
    dateEnd?: string;
    rename(name:string):void;
 
}

function createTask(id:number ,name:string, piority:string, done:boolean, dateStart?:string, dateEnd?:string):Task{
    const taskObj: Task = {
        id:id,
        taskName: name,
        piority: piority,
        done: done,
        dateStart: dateStart,
        dateEnd: dateEnd,
        rename(name){
            this.taskName = name;
        }
    }
    return taskObj;
}