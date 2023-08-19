import tabProjectListner from "../tabs/addProject/tabProjectLstner";
import { TaskList } from "../taskList";
import Delete from '../img/delete.svg';
import ListOfProjects from "../projectList";
import { clearSectionContent, clearSectionTitle } from "../clearSection";

function renderAsideProject(project: TaskList, mainContainer:Element){
    const container = document.createElement('div');
    container.classList.add('menu-button');

    const mainButton = document.createElement('button');
    tabProjectListner(mainButton, project);
    


    if ((project.id!=undefined)&&project.title){
        
        mainButton.id = `aside-${project.id}`;
    
        const title = createTitle(project.title);
        const button = createDeleteButton(container, project.id);
        
        container.appendChild(mainButton);
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

function createDeleteButton(container:Element, project_id:number):Element{
    const button = document.createElement('button');

    button.classList.add('done-button');
    button.innerHTML=`<img src="${Delete}">`;

    button.addEventListener('click',()=>{
        ListOfProjects.remove(project_id);
        container.remove();
        clearSectionTitle();
        clearSectionContent();
    });

    return button;
}

export default renderAsideProject;