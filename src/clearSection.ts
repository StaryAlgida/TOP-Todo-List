function clearSection(): void{
    const tilte = document.querySelector("#section-title");
    const contener = document.querySelector("#section-content");
    
    if (tilte && contener){
        tilte.innerHTML = ` `;
        contener.innerHTML = ` `;
    }
}

export default clearSection;