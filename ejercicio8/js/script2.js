// Función para mostrar los datos del localStorage

function showLS(){
    alert("Nombre: " +localStorage.getItem("name")+ "\nDirección: "+localStorage.getItem("address")+"\nEdad: "+localStorage.getItem("age")+
    "\nProfesión: "+localStorage.getItem("job"));
}

/* 
*  Comprobar los datos del localStorage, si están vacios pedimos los datos para guardarlos, 
*  si existen los datos, los mostramos
*/

if(localStorage.getItem("name")==null &&
    localStorage.getItem("address")==null &&
    localStorage.getItem("age")==null &&
    localStorage.getItem("job")==null ){
        let nameLS = prompt("Escribe tu nombre: ");
        let addressLS = prompt("Escribe tu dirección: ");
        let ageLS = prompt("Escribe tu edad: ");
        let jobLS = prompt("Escribe tu profesión: ");

        localStorage.setItem("name",nameLS);
        localStorage.setItem("address",addressLS);
        localStorage.setItem("age",ageLS);
        localStorage.setItem("job",jobLS);
        location.reload(true);
} else {
    showLS()
    localStorage.clear();
}