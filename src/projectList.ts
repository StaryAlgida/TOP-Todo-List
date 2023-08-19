import { TaskList } from './taskList';
import {Task} from './taskObj'

interface ProjectList{
    list: TaskList[];
    setProject(project: TaskList):void;
    remove(id: number):void;
    getList():TaskList[];
    getSize():number;
}

const ListOfProjects: ProjectList = {
    list: [],
    setProject(project){
        this.list.push(project);
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
        // console.log(`project list pop:${this.list}`);
        
    },
    getList() {
        return this.list;
    },
    getSize() {
        return this.list.length;
    }
};

export default ListOfProjects;