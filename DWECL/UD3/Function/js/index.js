//Declaracion tradicional 
function multiplicar(a){
return (a*5);
}
console.log(multiplicar(2));

//Expresion de funcion
const multiplicarII=function(a,b=10){
    return a*b;
}
console.log(multiplicarII(4));
console.log(multiplicarII(4,2));

const multiplicarIII=function multiplicarInterno(a,b=10){
return a*b;
}
console.log(multiplicarIII(5,7));
//console.log(multiplicarInterno(5,7));Da error porque no esta declarada 

//Funciones flecha

const multiplicarIV=(a,b=10)=>{
    return a*b;
}
console.log(multiplicarIV(5,6));

const multiplicarV=(a,b=10)=>a*b;
console.log(multiplicarV(4,6));

const IVA=a=>a*0.21;

console.log(IVA(10));