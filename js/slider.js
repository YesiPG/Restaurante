(function(){
    "use strict";

    const d = document;
    const w = window;
    const slider = [...d.querySelectorAll(".hero__content--imagenes")];

    w.addEventListener("DOMContentLoaded",(el)=>{
    
            setInterval(slider.forEach(e => e.classList.toggle("hero__content--imagenesShow")),1000);
        
    })
     



})();