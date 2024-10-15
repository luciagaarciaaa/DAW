//Declaracion variables
//Permite HOISTING => llama a la funcion antes de definirla

console.log(sumar(3,5));

function sumar(a,b){
return a+b;
}

//console.log(sumaI(3,6)) DA ERROR
const sumaI =function(a,b){
    return (a+b);

}
console.log(sumaI(3,6));

