let mensaje="variable global";

const mostrar=function(){
    let mensaje="variable local";
    let nombre="Maria";
    console.log({mensaje},{nombre});
}

mostrar();
console.log({mensaje});
// console.log({nombre});Da error no esta definido