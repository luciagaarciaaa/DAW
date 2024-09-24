let nota = prompt("introduce nota [1-10]","5");
console.log(typeof nota);
let resultado;
switch (nota) {
    case "1":
    case "2":
    case "":
    case "4":
        resultado = "insuficiente";
        break;
    case "5":
        resultado="suficiente";
    break;
    case "6":
        resultado="bien";
    break;
    case "7":
    case "8":
        resultado="notable";
    break;
    case "9":
    case "10":
        resultado="sobresaliente";
    break;
    default:
        resultado="Dato incorrecto. Debe estar entre el 1-10";
        break;
    
}
console.log(`el resultado es ${nota} corresponde con un ${resultado}`);
    