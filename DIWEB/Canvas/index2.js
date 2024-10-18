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
        let img= new Image();
        img.src='img_30847_90d0df0788e2830e9ab3347bf766487d_20.jpg';
        img.addEventListener('load', function(){
            contexto.drawImage(img,0,0);
            //Escalar imagen
            contexto.drawImage(img,0,500,200,200);
            //Recortar imagen
            contexto.drawImage(img,60,60,400,250,0,700,400,250);

        });
        

    }
})
   
