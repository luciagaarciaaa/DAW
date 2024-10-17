//INSERTAR ELEMENTOS A UN ARRAY AL FINAL Y AL PRINCIPIO

const numeros=[1,2,3,4,"cinco"];

/*insertamos elementos al final

numeros[numeros.length]=6;
console.table(numeros);
//forma2 Mediante PUSH

numeros.push(99);
console.table(numeros);
*/
//ELIMINAR ELEMENTOS
delete numeros[2]; //Borra el dato pero no la memoria
//console.table(numeros);

//Forma2 Elemino el ultimo elemento con pop

//console.log(numeros.pop());
//console.table(numeros);

//Forma3 eliminar con SHIFT

//console.log(numeros.shift());
//console.table(numeros);

//Forma4 Eliminar una posicion especifica de forma correcta SPLICE

//elimina desde la posicion inicial tantos elementos como indique el segundo argumento 
console.table(numeros);
console.log(numeros.splice(1,1));
console.table(numeros);

    