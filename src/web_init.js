import HeaderImg from './img/to-do-list.png'

const content = document.querySelector('#content');

const createHeader = function (){
    const header = document.createElement('header');
    header.innerHTML = `
    <img src=${HeaderImg} id="header-img">
    <h1>ToDo List</h1>`;
    
    return header;
}

const createAsideMenu = function(){
    const aside = document.createElement('aside');
    aside.innerHTML = `
    <ul>
        <li><img class="aside-img" src=""><span>To Do</span></li>
        <li><img class="aside-img" src=""><span>Today</span></li>
        <li><img class="aside-img" src=""><span>This week</span></li>
    </ul>
    <h2>Project</h2>
    <ul id="projects-list">
        <li><img class="aside-img" src=""><span>Add Project</span></li>
    </ul>`;

    return aside;
}

const createSection = function(){
    const section = document.createElement('section');

    return section;
}

const asideSectionContainer = function(){
    const container = document.createElement('div');
    container.id = 'content-container';

    container.appendChild(createAsideMenu());
    container.appendChild(createSection());
    
    return container;
}

const createFooter = function(){
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>Created by StaryAlgida</p>`;
    
    return footer; 
}

const webInit = function(){
    content.appendChild(createHeader());
    content.appendChild(asideSectionContainer());
    content.appendChild(createFooter());
}

export default webInit;