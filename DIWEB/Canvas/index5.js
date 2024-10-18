function cargaContextoCanvas(idCanvas){
let elemento=document.getElementById(idCanvas);
if(elemento && elemento.getContext){
    let contexto= elemento.getContext('2d');
    if(contexto){
        return contexto;
    }
}
return false;

}

window.addEventListener("DOMContentLoaded",function(){
    let contexto= cargaContextoCanvas("micanvas");
    if(contexto){
   contexto.fillStyle='#ff0000';
   contexto.fillRect(0,0,150,150);
   contexto.translate(100,50);

   contexto.fillStyle='rgba(0,0,255,0.5)';
   contexto.fillRect(0,0,150,150);

   //save te permite guardar el estado actual del canvas.
   //estos pueden ser restaurados en cualquier momento por restore
   //Esta técnica es muy util para las animaciones,para intercambiar estados mientras dibujamos de forma dinamica
   contexto.save();
    
   contexto.fillStyle='green';
   contexto.fillRect(10,10,150,150);

   contexto.restore();
   contexto.fillRect(200,0,150,150);

    }
});
   
