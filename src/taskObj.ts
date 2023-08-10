interface Task{
    id:number;
    taskName: string;
    piority: string;
    done: boolean;
    dateStart?: string;
    dateEnd?: string;
    rename(name:string):void;
    setPiority(piority:string):void;
    getPiority():string;
    getTaskName():string;
    setDone(isDone:boolean):void;
    getDone():boolean;
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
        },
        setPiority(piority){
            this.piority=piority;
        },
        getPiority(){
            return piority;
        },
        getTaskName(){
            return this.taskName
        },
        setDone(isDone){
            this.done = isDone;
        },
        getDone(){
            return this.done;
        }
    }
    return taskObj;
}

export {createTask, Task};