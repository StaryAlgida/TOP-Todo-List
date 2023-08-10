import {Task} from './taskObj'

interface TaskList{
    title?: string;
    list: Task[];
    setTask(task: Task):void;
    remove(id: number):void;
    getList():Task[];
    getSize():number;
}

const ListOfTasks: TaskList = {
    list: [],
    setTask(task){
        this.list.push(task);
        console.log(this.list);

    },
    remove(id){
        if(this.list.length > 1){
            for (let i = 0; i < this.list.length; i++) {
                if(this.list[i].id === id){
                    this.list.splice(i, 1);
                    break;
                }
            }
        }
        else
            this.list.pop();
        
    },
    getList() {
        return this.list;
    },
    getSize() {
        return this.list.length;
    },
};

export default ListOfTasks;