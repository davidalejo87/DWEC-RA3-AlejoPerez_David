// Pedimos al  usuario que nos escriba su nombre y apellidos
let name = prompt("Escribe tu nombre y tus apellidos : ");
// Reemplazamos los espacios del nombre completo
let name2 = name.replaceAll(" ", "");

// Contamos las letras que tiene la cadena
let nameCounter = name2.length;

// Convertimos todas las letras en minúsculas
let nameMin = name2.toLowerCase();

// Convertimos todas las letras en mayúsculas
let nameMay = name2.toUpperCase();


// Introducimos en un array cada palabra que está separada por espacios de la variable name
let arrayName = name.split(" ");

/* 
* Elegimos las 3 primeras letras de cada elemento del Array, en las variables lastName1 y lastName2 convertimos
* las letras en minúsculas
*/
let name3 = arrayName[0].substr(0,3);
let lastName1 = arrayName[1].substr(0,3).toLowerCase();
let lastName2 = arrayName[2].substr(0,3).toLowerCase();

// Variable para definir el userName 
let userName = name3 + lastName1 + lastName2;

/*
* Imprimimos or pantalla el tamaño del string name , el nombre y los apellidos sin espacios en minúsuclas y 
* mayúsculas, dividimos el nombre completo en 3 líneas y le damos un ejemplo de nombre de usuario 
* 
*/
document.write("La longitud del nombre y los apellidos sin contar los espacios es : " + nameCounter + "<br>" +
"La cadena sin espacios y en minúsculas : " + nameMin + "<br>" + 
"La cadena sin espacios y en mayúsuculas : " + nameMay + "<br>" +
arrayName[0] + "<br>" + arrayName[1] + "<br>" + arrayName[2] + "<br>" + "Un ejemplo para tu nombre de usuario podría ser : " +
userName);
