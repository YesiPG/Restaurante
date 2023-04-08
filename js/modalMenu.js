(function(){
    "use strict";
    const d = document;

    const modal = d.querySelector(".modal");
    const modalCont = d.querySelector(".modal__cont");
    const botones = [...d.querySelectorAll(".menu__cont--platos-btn")];
    const btnCerrar = d.querySelector(".modal__cont--boton")


    botones.forEach(el => {

        el.addEventListener("click", (e)=>{
            if(el.dataset.id = "1"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
            }
        })
    })

    btnCerrar.addEventListener("click",(e)=>{
        modal.classList.remove("modal__show");
        modalCont.classList.remove("modal__cont--show");
    })
})();