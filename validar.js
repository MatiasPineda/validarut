'use strict'

function identificarDigito(run){
    var index;
    var contador = 2;
    var suma = 0;
    for(index = run.length-2; index >= 0; index--){
        suma = suma + parseInt(run[index]) * contador;
        console.log(run[index], contador, suma);
        contador++;
        if(contador > 7){
            contador = 2;
        }
    }
    var digito;
    digito = 11 - (suma - ((~~(suma / 11)) * 11));
    if (digito == 10){
        digito = 0;
    }
    else if (digito == 11){
        digito = "K";
    }
    return digito;
}
function invalidar(run, dv){
    if(
        run == null || run.toUpperCase().endsWith(dv) == false || isNaN(run.substr(0,run.length-1)) || parseInt(run.substr(0,run.length-1)) <= 0)
    {

        document.querySelector("#error").innerHTML = "El rut no es válido <br/>";

    }
    else {
        document.querySelector("#error").style.display = "None";
    }
}



window.addEventListener("load", function(){
    console.log("Exito");
    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function() {
        console.log("Evento submit capturado");

        var rut = document.querySelector('#rut').value;
        rut = rut.trim().replace("-","");

        invalidar(rut, identificarDigito(rut));


    });
});
