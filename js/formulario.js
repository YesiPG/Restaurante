(function(){
    "use strict";
    const d = document;

    const nombre = d.getElementById("nombre");
    const apellido = d.getElementById("apellido");
    const correo = d.getElementById("correo");
    const boton = d.querySelector(".contacto__form--btn");

    boton.addEventListener("click",(e)=>{
        if(validarTexto(nombre) === true) nombre.classList.add("contacto__form--label-inputShow");
        else {
            e.preventDefault();
            nombre.classList.add("contacto__form--label-inputShow2");
        }

        if(validarTexto(apellido) === true) apellido.classList.add("contacto__form--label-inputShow");
        else {
            e.preventDefault();
            apellido.classList.add("contacto__form--label-inputShow2");
        }

        if(validarCorreo(correo) === true) correo.classList.add("contacto__form--label-inputShow");
        else {
            e.preventDefault();
            correo.classList.add("contacto__form--label-inputShow2");
        }
    })

    const validarTexto = (texto)=>{
        let regexNombre = /^[a-zA-ZÀ-ÿ\s]+$/;

        if(regexNombre.test(texto.value)) return true;
        else return false;
    }

    const validarCorreo = (texto)=>{
        let regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/;

        if(regexCorreo.test(texto.value)) return true;
        else return false;
    }
})();