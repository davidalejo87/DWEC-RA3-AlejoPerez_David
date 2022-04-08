/*
* Pedimos al usuario que nos de un valor por prompt y a partir de ahí calculamos el diametro,
* perímetro, área del círculo, el área de la esfera y el volúmen de la esfera.
*
* Para redondear a 2 décimales hemos utilizado la función Math.round() y el valor de cada 
* variable la hemos metido en otra con el mismo nombre pero terminando en R para diferenciarlas.
*
* Finalmente hemos utilizado document.write() para imprimir las variables por pantalla.
*/



let radio = prompt("Escribe el valor del radio de una circunferencia: ");
let valorRadio = radio ;
let diametro = radio * 2; // cm
let diametroR = Math.round(diametro * 100) / 100;
let perimetro = 2 * radio * Math.PI ; // cm
let perimetroR = Math.round(perimetro  * 100) / 100;
let areaCirculo = Math.PI * Math.pow(radio,2); // cm^2
let areaCirculoR = Math.round(areaCirculo  * 100) / 100;
let areaEsfera = Math.PI * 4 * Math.pow(radio,2); // cm^2
let areaEsferaR = Math.round(areaEsfera * 100) / 100;
let volumenEsfera = 4/3 * Math.PI * Math.pow(radio,3); // cm^3
let volumenEsferaR = Math.round(volumenEsfera * 100) / 100;



document.write("El valor del radio es : " + radio + " cm" + "<br>" + 
"El valor del diametro es : " + diametroR + " cm" + "<br>" + 
"El valor del perímetro es : " + perimetroR + " cm" + "<br>" + 
"El valor del área del círculo es : " + areaCirculoR + " cm<sup>2</sup>" + "<br>" + 
"El valor del área de la esfera es : " + areaEsferaR + " cm<sup>2</sup>" + "<br>" + 
"El valor del volumen de la esfera es : " + volumenEsferaR + " cm<sup>3</sup>");



