import tabProjectListner from "../tabs/addProject/tabProjectLstner";
import { TaskList } from "../taskList";
import Delete from '../img/delete.svg';

function renderAsideProject(project: TaskList, mainContainer:Element){
    const container = document.createElement('button');
    tabProjectListner(container, project);
    container.classList.add('menu-button');


    if ((project.id!=undefined)&&project.title){
        
        container.id = `aside-${project.id}`;
    
        const title = createTitle(project.title);
        const button = createDeleteButton();

        container.appendChild(title);
        container.appendChild(button);
    }

    mainContainer.appendChild(container);
}

function createTitle(title:string):Element{
    const span = document.createElement('span');
    span.innerText = `${title}`;
    return span;
}

function createDeleteButton():Element{
    const button = document.createElement('button');
    button.classList.add('done-button');
    button.innerHTML=`<img src="${Delete}">`;

    return button;
}

export default renderAsideProject;