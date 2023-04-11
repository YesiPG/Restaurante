(function(){
    "use strict";
    const d = document;

    const contPlatos = d.querySelector(".menu__cont");
    const contenedor = d.querySelectorAll(".menu__cont--platos");
    const boton = [...d.querySelectorAll(".menu__botones--btn")];
    let platillosArreglo = [];

    contenedor.forEach(plato => platillosArreglo = [...platillosArreglo,plato]);

    const tacos = platillosArreglo.filter(taco => taco.getAttribute('data-platos')=== 'tacos');
    const sopes = platillosArreglo.filter(sope => sope.getAttribute('data-platos')=== 'sopes');
    const quesadillas = platillosArreglo.filter(quesadilla => quesadilla.getAttribute('data-platos')=== 'quesadillas');
    const nachos = platillosArreglo.filter(nacho=> nacho.getAttribute('data-platos')==='nachos');
    const bebidas = platillosArreglo.filter(b => b.getAttribute('data-platos') === 'bebidas');
    const todos = platillosArreglo;

    boton.forEach(el => {
        el.addEventListener("click", (e)=>{
            if(el.textContent === "TODO"){
                limpiarHtml(contPlatos);
                todos.forEach(t=> contPlatos.appendChild(t));
            }
            if(el.textContent === "TACOS"){
                limpiarHtml(contPlatos);
                tacos.forEach(taco => contPlatos.appendChild(taco));
            }
            if(el.textContent === "NACHOS"){
                limpiarHtml(contPlatos);
                nachos.forEach(nacho => contPlatos.appendChild(nacho));
            }
            if(el.textContent === "SOPES"){
                limpiarHtml(contPlatos);
                sopes.forEach(sope => contPlatos.appendChild(sope));
            }
            if(el.textContent === "QUESADILLAS"){
                limpiarHtml(contPlatos);
                quesadillas.forEach(q => contPlatos.appendChild(q));
            }
            if(el.textContent === "BEBIDAS"){
                limpiarHtml(contPlatos);
                bebidas.forEach(b => contPlatos.appendChild(b));
            }
        })
    })

    const limpiarHtml = (contenedor) =>{
        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
        }
    }
})();