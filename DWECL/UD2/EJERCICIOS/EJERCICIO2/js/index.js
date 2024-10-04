let ventana;

function abrirVentana(){
    if(!ventana || ventana.closed){
        ventana = window.open("","","width=200,heigth=200");
        ventana.document.write("<p>La ventana es de 200x200</p>");
    }else{
        ventana.focus();
    }
}

function redimensionarVentana(){
    if(ventana && !ventana.closed){
        ventana.resizeBy(600,600);
        ventana.document.write("<p>Ventana redimensionada a 600x600</p>")
    }
}

function moverVentana(){
    if(ventana && !ventana.closed){
        ventana.moveTo(screen.width -610, ventana.screenY);
    }
}

function cerrarVentana(){
    if(ventana && !ventana.closed){
        ventana.close();
    }
}