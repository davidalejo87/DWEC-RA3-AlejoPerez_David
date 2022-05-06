// Función watch para mostrar la hora

function watch() {

    // Obtenemos el momento actual
    let now = new Date();

    // Introducimos la hora, minutos y segundos en sus respectivas variables
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let acronym = "";
    
    // Creamos y le damos valor a la variable acronym según la hora
    if( hours > 11 ){
        acronym = "PM";
    } else {
        acronym = "AM";
    }

    // Cambiamos el formato de las horas de 24 a 12
    if (hours > 12){
        hours = hours - 12;
    }
  
    // Utilizamos la función add0 para añadir un 0 delante si es necesario
    hours = add0(hours);
    minutes = add0(minutes);
    seconds = add0(seconds);


    // Variable con la hora 
    let printWatch = hours + " : " + minutes+ " : " + seconds + " " + acronym;

    // Imprimimos la hora en elemento con el id = clock
    document.getElementById("clock").innerHTML = printWatch;

    // Carga el reloj cada segundo
    setTimeout(watch, 1000);

}

// Función add0 para añadir un 0 cuando los numeros son menores que 10

function add0(i) {
    if (i< 10){
        i = "0" + i
    }
    return i ;
}
