import createProject from '../../createProject';
import Add from '../../img/aside/add.svg';
import ListOfProjects from '../../projectList';
import renderAsideProject from '../../renders/projectAsideRender';

function addProject(){
    const button = document.querySelector('#add-project');
    const container = document.querySelector('#project');

    if(button&&container)
        addProjectListner(button, container);
}

function addProjectListner(button:Element, container:Element):void{
    button.addEventListener('click',()=>{
        container.innerHTML = `<input type="text" maxlength="15" id="project-title">
        <div>
            <button id="p-add">Add</button>
            <button id="p-cencle">Cencle</button>
        </div>`;
        
        add(container);
        cencle(container);
    });
}

function add(container:Element):void{
    const button = document.querySelector('#p-add');
    const input = document.querySelector('#project-title') as HTMLInputElement;
    if(button&&input){
        button.addEventListener('click',()=>{
            const project = createProject(input.value, ListOfProjects.getSize());
            ListOfProjects.setProject(project);
            reset(container);
        });
    }
}

function cencle(container:Element):void{
    const button = document.querySelector('#p-cencle');
    if(button){
        button.addEventListener('click',()=>{
            reset(container);
        });
    }
}

function reset(container:Element):void{
    container.innerHTML = `<button class="menu-button" id="add-project"><img class="menu-img" src="${Add}"><span>Add Project</span></button>`;
    const addProject = document.querySelector('#add-project');
    const project = document.querySelector('#project');
    const projectContanier = document.querySelector('#project-container');
    if(addProject&&project&&projectContanier){

        addProjectListner(addProject ,project);
        projectContanier.innerHTML = ``;
        const list = ListOfProjects.getList();
        list.forEach(project=>{
            renderAsideProject(project, projectContanier);
        });
    }
        
}

export default addProject;