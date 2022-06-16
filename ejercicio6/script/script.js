// Creamos dos listas una con el título de la receta, y la otra con la receta en sí

let cookingRecipeTittle = ["Papas con chocos", "Ensaladilla", "Carne al toro", "Gazpacho"];
let cookingRecipe = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum atque corporis eos fuga facilis laudantium odio laborum voluptates, perspiciatis ipsum aperiam fugit incidunt enim distinctio tenetur omnis quo ad!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum atque corporis eos fuga facilis laudantium odio laborum voluptates, perspiciatis ipsum aperiam fugit incidunt enim distinctio tenetur omnis quo ad!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum atque corporis eos fuga facilis laudantium odio laborum voluptates, perspiciatis ipsum aperiam fugit incidunt enim distinctio tenetur omnis quo ad!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum atque corporis eos fuga facilis laudantium odio laborum voluptates, perspiciatis ipsum aperiam fugit incidunt enim distinctio tenetur omnis quo ad!"];


// Función para mostrar la lista de recetas
function showList(cookingRecipeTittle,cookingRecipe){
    // Creamos elemento ol con un id para identificarlo
    let ol= document.createElement("ol")
    ol.setAttribute("id","recipeList");

    // Bucle para crear los elementos li, ul e introducirlos en un nodo 
    for(let i=0; i<cookingRecipeTittle.length ; i++){
        // Creamos los elementos li para el título de la receta
        let li = document.createElement("li");
        // Introducimos li en un nuevo nodo
        li.appendChild(document.createTextNode(cookingRecipeTittle[i]));
        // Creamos los elementos ul para la
        let ul = document.createElement("ul");

        ul.appendChild(document.createTextNode(cookingRecipe[i]));
        // Añadimos ul a li
        li.appendChild(ul);
        // Añadimos li al ol
        ol.appendChild(li);
    }
    // Añadimos el ol creado con todos sus li>ul al body 
    document.body.appendChild(ol);
}


// Función para comprobar que el usuario nos da un valor valido
function checkPosition(numberRecipe){
    if(isNaN(numberRecipe) || numberRecipe > cookingRecipeTittle.length || numberRecipe < 1 || parseInt(numberRecipe)!=numberRecipe ){
        return false;
    }
    return true;
}

// Función para borrar la lista entera
function deleteList(){
    document.body.removeChild(document.getElementById("recipeList"))
}

//Función para borra la receta elegida, borrar la lista entera y volver a mostrar las recetas menos la que ha eliminado el usuario
function deleteItem(){
    let numberRecipe =  prompt("Elige una receta a eliminar (escribe el número): ");
    

    if (checkPosition(numberRecipe)){
        numberRecipe--;
        cookingRecipeTittle.splice(numberRecipe,1);
        cookingRecipe.splice(numberRecipe,1);

        deleteList();
        showList(cookingRecipeTittle,cookingRecipe);
    } else {
        return alert("El número no es válido.");
    }

}


