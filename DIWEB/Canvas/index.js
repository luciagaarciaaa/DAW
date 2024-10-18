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
        contexto.beginPath();
        contexto.arc(75,75,60,Math.PI,Math.PI*0.5,false);
        contexto.arc(75,75,40,Math.PI*0.5,Math.PI,false);
        contexto.closePath();
        //contexto.stroke();
        //contexto.lineTo(75,185);
        contexto.fill();
        contexto.beginPath();
        contexto.fillStyle='orange';
        contexto.arc(75,75,15,0,Math.PI*2,false);
        contexto.fill();

        //Prueba
        contexto.beginPath();
        contexto.arc(200,200,60,0,Math.PI,true);
        contexto.lineTo(200,400);
        contexto.lineTo(260,200);
        contexto.arc(245,200,15,0,Math.PI,false);
        contexto.arc(215,200,15,0,Math.PI,false);
        contexto.arc(185,200,15,0,Math.PI,false);
        contexto.arc(155,200,15,0,Math.PI,false);

        contexto.stroke();
        

    }
})
   
