let fecha = prompt("Introduce una fecha");
let fechaPartes = fecha.split('/');

if(fechaPartes.length === 3){
    let dia = parseInt(fechaPartes[0], 10);
    let mes = parseInt(fechaPartes[1], 10) -1;
    let anio = parseInt(fechaPartes[2], 10);

    let fechaOriginal = new Date(anio, mes, dia);

    //Comprobamos si la fecha es valida
    if(fechaOriginal.getDate() === dia && fechaOriginal.getMonth() === mes && fechaOriginal.getFullYear() === anio){
        let fecha30 = new Date(fechaOriginal);
        let fecha60 = new Date(fechaOriginal);
        let fecha90 = new Date(fechaOriginal);

        //Sumamos las fechas
        fecha30.setDate(fecha30.getDate() + 30);
        fecha60.setDate(fecha60.getDate() + 60);
        fecha90.setDate(fecha90.getDate() + 90);

    //Mostrar los resultados
    document.getElementById('resultado').innerHTML = `
    <p>Fecha original es: <strong>${fechaOriginal.toLocaleDateString('es-ES')}</strong></p>
    <p>Fecha 30 dias despues: <strong>${fecha30.toLocaleDateString('es-ES')}</strong></p>
    <p>Fecha 60 dias despues: <strong>${fecha60.toLocaleDateString('es-ES')}</strong></p>
    <p>Fecha 90 dias despues: <strong>${fecha90.toLocaleDateString('es-ES')}</strong></p>`

    }else{
        document.getElementById('resultado').innerHTML = "<p style='color:red;'>Fecha incorrecta. Formato incorrecto</p>";
    }
}
else{
    document.getElementById('resultado').innerHTML = "<p style='color:red;'>Fecha incorrecta. Formato incorrecto</p>";
}