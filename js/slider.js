(function(){
    "use strict";

    const d = document;
    const w = window;
    const slider = [...d.querySelectorAll(".event__cont")];
    let valor;

    const mover = (cambio)=>{
        const actual = Number(d.querySelector(".event__cont--show").dataset.id);

        valor = actual;
        valor += cambio;

        if(valor === 0 || valor === slider.length + 1){
            valor = valor === 0 ? slider.length : 1;
        }

        slider[actual-1].classList.toggle("event__cont--show");
        slider[valor-1].classList.toggle("event__cont--show");
    }
     
    d.addEventListener("click",(e)=>{
        if(e.target.matches(".btn__izq")) mover(-1);
        if(e.target.matches(".btn__der")) mover(1);
    })


})();