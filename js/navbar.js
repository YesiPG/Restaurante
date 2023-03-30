(function(){
    "use strict"
    const d = document;
    const w = window;

    const nav = d.querySelector(".nav");
    const navContenedor = d.querySelector(".nav__content");
    const btnMenu = d.querySelector(".nav__btnM");
    const btnClose = d.querySelector(".nav__btnC");

    d.addEventListener("click", (e)=>{
       
        if(e.target.matches(".nav__btnM")){
            navContenedor.classList.add("nav__content--show");
            btnMenu.classList.add("nav__btnM--show");
            btnClose.classList.add("nav__btnC--show");
        }
        if(e.target.matches(".nav__btnC")){
            navContenedor.classList.remove("nav__content--show");
            btnMenu.classList.remove("nav__btnM--show");
            btnClose.classList.remove("nav__btnC--show");
        }
        
    })

    w.addEventListener("scroll",(e)=>{

        if(w.scrollY >= 400){
           nav.classList.add("nav--show");
           nav.classList.add("nav--show2");
        }
        else{
            nav.classList.remove("nav--show2");
            nav.classList.remove("nav--show");
        }
    })


})();