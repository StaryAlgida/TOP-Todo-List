import HeaderImg from './img/HeaderImg.png';
import InboxImg from './img/aside/InboxImg.svg';
import CalendarDate from './img/aside/CalendarDate.svg';
import Calendar from './img/aside/Calendar.svg';
import Add from './img/aside/add.svg';

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
        <li><button class="menu-button" id="to-do"><img class="menu-img" src="${InboxImg}"><span>To Do</span></button></li>
        <li><button class="menu-button" id="today"><img class="menu-img" src="${CalendarDate}"><span>Today</span></button></li>
        <li><button class="menu-button" id="week"><img class="menu-img" src="${Calendar}"><span>This week</span></button></li>
    </ul>
    <h2>Project</h2>
    <ul id="projects-list">
        <li><button class="menu-button" id="add-menu"><img class="menu-img" src="${Add}"><span>Add Project</span></button></li>
    </ul>`;

    return aside;
}

const createSection = function(): Element{
    const section = document.createElement('section');
    section.innerHTML = `<h2 id="section-title"></h2>
    <div id="section-content"></div>`;

    return section;
}

const asideSectionContainer = function(): Element{
    const container = document.createElement('div');
    container.id = 'content-container';

    container.appendChild(createAsideMenu());
    container.appendChild(createSection());
    
    return container;
}

const createFooter = function(): Element{
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>Created by StaryAlgida</p>`;
    
    return footer; 
}

const webInit = function(){
    if(content){
        content.appendChild(createHeader());
        content.appendChild(asideSectionContainer());
        content.appendChild(createFooter());
    }
}

export default webInit;