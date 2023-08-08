import {Task} from './taskObj'

interface TaskList{
    title?: string;
    list: Task[];
    setTask(task: Task):void;
    remove(task: Task):void;
    getList():Task[];
    getSize():number;
}

const ListOfTasks: TaskList = {
    list: [],
    setTask(task){
        this.list.unshift(task);
        console.log(this.list);

    },
    remove(task){
        this.list.splice(task.id, 1);
    },
    getList() {
        return this.list;
    },
    getSize() {
        return this.list.length;
    },
};

export default ListOfTasks;