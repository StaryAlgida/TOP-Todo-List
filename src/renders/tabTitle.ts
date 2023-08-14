function tabTitle(title:string):void{
    const tabTitle = document.querySelector("#section-title");
    if(tabTitle)
        tabTitle.innerHTML = `${title}`;
}

export default tabTitle;