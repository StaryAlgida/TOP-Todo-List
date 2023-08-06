function clearSection(){
    const tilte = document.querySelector("#section-title");
    const contener = document.querySelector("#section-content");

    tilte.innerHTML = ` `;
    contener.innerHTML = ` `;
}

export default clearSection;