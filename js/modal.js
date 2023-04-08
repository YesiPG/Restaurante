(function(){
    "use strict";
    const d = document;

    const contModal = d.querySelector(".product__modal");
    const contModalShow = d.querySelector(".product__modal--cont");
    const imagen = d.querySelector(".product__modal--cont-img");
    const titulo = d.querySelector(".product__modal--cont-descTitle");
    const parrafo = d.querySelector(".product__modal--cont-descParrafo");
    const detalle = d.querySelector(".product__modal--cont-descDetalle");
    const btnSearch = [...d.querySelectorAll(".product__cont--platos-btn")];
    const btnClose = d.querySelector(".product__modal--cont-btn");

    btnSearch.forEach(el => {
        
        el.addEventListener("click", (e)=>{
            
            if(el.dataset.id =="1"){
                contModal.classList.add("product__modal--show");
                contModalShow.classList.add("product__modal--cont-show");
                imagen.setAttribute("src","https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg");
                imagen.setAttribute("alt","Tacos al pastor");
                titulo.innerHTML = "Tacos al pastor";
                parrafo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo architecto maxime ipsa minima eius consectetur illo in veritatis hic voluptas nesciunt nemo, voluptatem quos quibusdam quia autem fugit unde!";
                detalle.innerHTML = `<b>SKU:</b> Tacos al pastor.<br> <b>Categoria:</b> Entradas.<br> <b>Etiquetas:</b> Saludable, Tacos. `;

                btnClose.addEventListener("click",(e)=>{
                    contModal.classList.remove("product__modal--show");
                    contModalShow.classList.remove("product__modal--cont-show");

                });

            }

            if(el.dataset.id =="2"){
                contModal.classList.add("product__modal--show");
                contModalShow.classList.add("product__modal--cont-show");
                imagen.setAttribute("src","https://cdn7.kiwilimon.com/recetaimagen/959/22479.jpg");
                imagen.setAttribute("alt","Nachos");
                titulo.innerHTML = "Nachos";
                parrafo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo architecto maxime ipsa minima eius consectetur illo in veritatis hic voluptas nesciunt nemo, voluptatem quos quibusdam quia autem fugit unde!";
                detalle.innerHTML = `<b>SKU:</b> Nachos.<br> <b>Categoria:</b> Entradas.<br> <b>Etiquetas:</b> Saludable, Tacos. `;

                btnClose.addEventListener("click",(e)=>{
                    contModal.classList.remove("product__modal--show");
                    contModalShow.classList.remove("product__modal--cont-show");

                });


            }

            if(el.dataset.id =="3"){
                contModal.classList.add("product__modal--show");
                contModalShow.classList.add("product__modal--cont-show");
                imagen.setAttribute("src","https://mejorconsalud.as.com/wp-content/uploads/2020/12/plato-mexicano-sope.jpg");
                imagen.setAttribute("alt","Sopes de pollo");
                titulo.innerHTML = "Sopes de pollo";
                parrafo.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo architecto maxime ipsa minima eius consectetur illo in veritatis hic voluptas nesciunt nemo, voluptatem quos quibusdam quia autem fugit unde!";
                detalle.innerHTML = `<b>SKU:</b> Sopes.<br> <b>Categoria:</b> Entradas.<br> <b>Etiquetas:</b> Saludable, Tacos. `;

                btnClose.addEventListener("click",(e)=>{
                    contModal.classList.remove("product__modal--show");
                    contModalShow.classList.remove("product__modal--cont-show");

                });

            }
        })
    })
})();