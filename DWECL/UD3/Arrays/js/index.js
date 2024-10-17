//FORMAS DE DECLARAR UN ARRAY, DIMENSION Y ACCESO AL ARRAY
//Forma tradicional (desuso)
const nombre= new Array(6); //Vacio con 6 elementos
const provincias= new Array("Cordoba","Sevilla","");

//Forma mas comun 
const numeros=[1,2,3,4];
const letras=[]; //Array vacio
//console.log(nombre.length);
nombre[nombre.length]="hola";// crecer mi array

console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);
console.log(nombre[3]);
console.log(nombre[4]);
console.log(nombre[5]);
console.log(nombre[6]);
console.table(numeros);

