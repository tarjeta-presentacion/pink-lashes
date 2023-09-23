const menu_slide = document.getElementById("qr");
const contenedor= document.getElementById("contenedor");
const botones= document.getElementById("botones");

menu_slide.onclick = function () {
    menu_slide.classList.toggle("active")
    contenedor.classList.toggle("active")
    botones.classList.toggle("active")
   
  }
  