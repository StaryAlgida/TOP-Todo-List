interface TaskList{
    title?: string;
    list: Task[];
    setTask(task: Task):void;
    remove(task: Task):void;
    getList():void;
}

const ListOfTasks: TaskList = {
    list: [],
    setTask(task){
        this.list.push(task);
    },
    remove(task){

    },
    getList() {
        return this.list;
    },
};

export default ListOfTasks;