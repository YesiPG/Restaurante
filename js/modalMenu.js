(function(){
    "use strict";
    const d = document;

    const modal = d.querySelector(".modal");
    const modalCont = d.querySelector(".modal__cont");
    const botones = [...d.querySelectorAll(".menu__cont--platos-btn")];
    const btnCerrar = d.querySelector(".modal__cont--boton");
    const titulo = d.querySelector(".modal__cont--texto-title");
    const parrafo = d.querySelector(".modal__cont--texto-parrafo");
    const detalle = d.querySelector(".modal__cont--texto-parrafo2");
    const imagen = d.querySelector(".modal__cont--img");


    botones.forEach(el => {

        el.addEventListener("click", (e)=>{
            if(el.dataset.id == "1"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://i.pinimg.com/originals/b7/b3/de/b7b3dee93dc69bb0f443fb2773a9b8c4.jpg");
                imagen.setAttribute("alt","Quesadillas norteñas");
                titulo.innerHTML = "Quesadillas norteñas";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Quesadillas norteñas <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Saludable <br>`;
            }
            if(el.dataset.id == "2"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://cdn7.kiwilimon.com/recetaimagen/33887/39394.jpg");
                imagen.setAttribute("alt","Sopes de tuetano");
                titulo.innerHTML = "Sopes de tuetano";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Sopes de tuetano <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Saludable <br>`;
            }
            if(el.dataset.id == "3"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://bucketrediseno.s3.amazonaws.com/uploads/photo/image/7491/mexican-tequila-drinks.jpg");
                imagen.setAttribute("alt","Tequila");
                titulo.innerHTML = "Tequila";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tequila <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Bebida alcoholica <br>`;
            }
            if(el.dataset.id == "4"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://comohacernachos.com/img/nachos-con-chili-511.jpg");
                imagen.setAttribute("alt","Nachos con chili");
                titulo.innerHTML = "Nachos con chili";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Nachos con chili <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Comida saludable <br>`;
            }
            if(el.dataset.id == "5"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://cdn0.recetasgratis.net/es/posts/9/3/5/quesadillas_de_pollo_mexicanas_61539_orig.jpg");
                imagen.setAttribute("alt","Quesadillas de pollo");
                titulo.innerHTML = "Quesadillas de pollo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Quesadillas de pollo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Comida saludable <br>`;
            }
            if(el.dataset.id == "6"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://bucketrediseno.s3.amazonaws.com/uploads/photo/image/7492/mexican-margarita-drink.jpg");
                imagen.setAttribute("alt","Margarita");
                titulo.innerHTML = "Margarita";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Margarita <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Bebida alcoholica <br>`;
            }
            if(el.dataset.id == "7"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://comohacernachos.com/img/nachos-con-pollo-641.jpg");
                imagen.setAttribute("alt","Nachos con pollo");
                titulo.innerHTML = "Nachos con pollo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Nachos con pollo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> Bebida alcoholica <br>`;
            }
            if(el.dataset.id == "8"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2018/07/sopes-de-pastor.jpg");
                imagen.setAttribute("alt","Sopes de pastor");
                titulo.innerHTML = "Sopes de pastor";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Sopes de pastor <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, verdura <br>`;
            }
            if(el.dataset.id == "9"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://cdn7.kiwilimon.com/brightcove/6567/6567.jpg");
                imagen.setAttribute("alt","Sopes de tinga");
                titulo.innerHTML = "Sopes de tinga";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Sopes de tinga <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, verdura <br>`;
            }
            if(el.dataset.id == "10"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg");
                imagen.setAttribute("alt","Tacos al pastor");
                titulo.innerHTML = "Tacos al pastor";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tacos al pastor <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, verdura <br>`;
            }
            if(el.dataset.id == "11"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://assets.unileversolutions.com/recipes-v2/210445.jpg");
                imagen.setAttribute("alt","Quesadillas de queso");
                titulo.innerHTML = "Quesadillas de queso";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Quesadillas de queso <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "12"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://cdn7.kiwilimon.com/recetaimagen/959/22479.jpg");
                imagen.setAttribute("alt","Nachos");
                titulo.innerHTML = "Nachos";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Nachos <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "13"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://bucketrediseno.s3.amazonaws.com/uploads/photo/image/7493/michelada-mexican-drink.jpg");
                imagen.setAttribute("alt","Michelada");
                titulo.innerHTML = "Michelada";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Michelada <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "14"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/60e29e998dfdaf159e79ea8d2ebc47e1.jpg");
                imagen.setAttribute("alt","Sopes de chicharron");
                titulo.innerHTML = "Sopes de chicharron";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Sopes de chicharron <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "15"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://www.gastrolabweb.com/u/fotografias/m/2022/1/23/f1280x720-24652_156327_5050.jpg");
                imagen.setAttribute("alt","Quesadillas de chorizo");
                titulo.innerHTML = "Quesadillas de chorizo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Quesadillas de chorizo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "16"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://okdiario.com/img/2022/04/30/tacos.jpg");
                imagen.setAttribute("alt","Tacos de carnitas");
                titulo.innerHTML = "Tacos de carnitas";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tacos de carnitas <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "17"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://mejorconsalud.as.com/wp-content/uploads/2020/12/plato-mexicano-sope.jpg");
                imagen.setAttribute("alt","Sopes de pollo");
                titulo.innerHTML = "Sopes de pollo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Sopes de pollo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "18"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://bucketrediseno.s3.amazonaws.com/uploads/photo/image/7494/carajillo-drink.jpg");
                imagen.setAttribute("alt","Carajillo");
                titulo.innerHTML = "Carajillo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Carajillo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "19"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://cdn0.recetasgratis.net/es/posts/5/7/3/agua_de_horchata_74375_orig.jpg");
                imagen.setAttribute("alt","Horchata");
                titulo.innerHTML = "Horchata";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Horchata <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "20"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://images.ctfassets.net/n7hs0hadu6ro/1sNjj3Tb7G6U8dzCu0FMf3/aa9c9222bb5346e2537b17fbb60de31d/tacos-de-birria-origen-receta-y-taquerias.jpg?w=1920&h=1280&fl=progressive&q=50&fm=jpg");
                imagen.setAttribute("alt","Tacos de birria");
                titulo.innerHTML = "Tacos de birria";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tacos de birria <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "21"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://www.goya.com/media/3724/mexican-style-atole.jpg?quality=80");
                imagen.setAttribute("alt","Atole");
                titulo.innerHTML = "Atole";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Atole <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "22"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://comohacernachos.com/img/nachos-barbacoa-401.jpg");
                imagen.setAttribute("alt","Nachos barbacoa");
                titulo.innerHTML = "Nachos barbacoa";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Nachos barbacoa <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "23"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://www.mexicoenmicocina.com/wp-content/uploads/2019/06/Receta-de-tepache-de-pina-2.jpg");
                imagen.setAttribute("alt","Tapache");
                titulo.innerHTML = "Tapache";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tapache <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "24"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://images.ctfassets.net/n7hs0hadu6ro/2BcA6Nfsvchfl0VCb9WVII/46dbecf1977260fb23c176fa098961fc/tipos-tacos-de-camaron-980x653.jpg?w=980&h=653&q=50&fm=webp");
                imagen.setAttribute("alt","Tacos de camaron");
                titulo.innerHTML = "Tacos de camaron";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tacos de camaron <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "25"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://images.ctfassets.net/n7hs0hadu6ro/2t1XTd9eTiIn1BEdO83Vxy/10d05bec43963e13898f04a0f138af9e/tacos-de-longaniza-con-verdura-1024x683.jpg?w=1000&h=667&q=50&fm=webp");
                imagen.setAttribute("alt","Tacos de longaniza");
                titulo.innerHTML = "Tacos de longaniza";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Tacos de longaniza <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
            if(el.dataset.id == "26"){
                modal.classList.add("modal__show");
                modalCont.classList.add("modal__cont--show");
                imagen.setAttribute("src","https://comohacernachos.com/img/nachos-con-frijoles-y-pavo-850.jpg");
                imagen.setAttribute("alt","Nachos con frijoles y pavo");
                titulo.innerHTML = "Nachos con frijoles y pavo";
                parrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae commodi eveniet esse. Dignissimos laborum nobis voluptatem assumenda, eos repudiandae placeat minus aliquid sapiente iste, dolore iusto. ";
                detalle.innerHTML=`<b>SKU:</b> Nachos con frijoles y pavo <br>
                <b>Categoria:</b> Entrada <br>
                <b>Etiquetas:</b> tacos, comida, queso <br>`;
            }
        })
    })

    btnCerrar.addEventListener("click",(e)=>{
        modal.classList.remove("modal__show");
        modalCont.classList.remove("modal__cont--show");
    })
})();