import { TaskList } from "./taskList";

function createProject(title:string, id:number):TaskList{
    const Project:TaskList ={
        title:title,
        id:id,
        list:[],
        setTask(task){
            this.list.push(task);
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
                // console.log(`project task pop:${this.list}`);
        },
        getList() {
            return this.list;
        },
        getSize() {
            return this.list.length;
        }, 
    };
    return Project;
}

export default createProject;