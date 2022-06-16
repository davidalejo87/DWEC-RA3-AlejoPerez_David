// Comprobamos que no existen las cookies

if(document.cookie==""){
    alert("No existen las cookies");

    // Pedimos los datos personales 
    let name = prompt("Nombre: ");
    let direction = prompt("Direccion: ");
    let age = prompt("Edad: ");
    let job = prompt("Profesión: ");

    // Introducimos los datos en cookies
    document.cookie= "nombre = " + encodeURIComponent(name); 
    document.cookie= "direccion = " + encodeURIComponent(direction);
    document.cookie= "edad = " + encodeURIComponent(age);
    document.cookie= "profesion = " + encodeURIComponent(job);

} else {
    // Mostramos las cookies almacenadas
    document.write(document.cookie.split(" ; "));
}