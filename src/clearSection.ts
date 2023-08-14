function clearSectionTitle(): void{
    const tilte = document.querySelector("#section-title");
    if (tilte)
        tilte.innerHTML = ` `;
}

function clearSectionContent(){
    const contener = document.querySelector("#section-content");
    if(contener)
        contener.innerHTML = ` `;
}   

export {clearSectionTitle, clearSectionContent};