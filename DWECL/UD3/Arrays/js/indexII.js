// RECORRIDO DE UN ARRAY
const numeros=[1,2,3,"cinco"];

//Vamos a declarar funciones para recorrer arrays de distintas formas
const recorrerFor=function(){
console.log("for tradiconal");

for(i=0; i<numeros.length;i++){
   // console.log(numeros[i]);
    console.log(`${i} - ${numeros[i]}`);//La forma mas correcta hacen lo mismo
}
}

recorrerFor();

//RECORRIDO CON EL BUCLE FOR IN

const recorrerForIn=()=>{
console.log("For In");
    for(const i in numeros){
        console.log(`${i} - ${numeros[i]}`);
    }
}

recorrerForIn();


//RECORRIDO CON BUCLE FOR OF
const recorrerForOf=()=>{
    console.log("for of");
    //no necesitamos indice
    //SI recorre los vacios

    for(const elemento of numeros ){
        console.log(`${elemento}`);
        
    }
}

recorrerForOf();


//RECORRIDO CON FOREACH

const recorrerForeach=()=>{
    console.log("Foreach");

    numeros.forEach(elemento => {
        console.log(`${elemento}`);
    });

    console.log("Foreach 2");
    numeros.forEach((elemento, i )=> {
        console.log(`${i} - ${elemento}`);
    });
    
}
recorrerForeach();
