// Creamos dos listas, la de los equipos y los puntos de los equipos
const teams =["FC Barcelona","Real Madrid","Atlético de Madrid","Sevilla"];
const points = ["20","17","12","9"];

// Creamos función  para completar la tabla con las listas 
function completeTable(teams, points){
    let table = document.getElementById("Clasification");
    let tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "Positions");

    for (let i = 0; i < teams.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            let textCell;

            switch (j) {
                case 0:
                    textCell = document.createTextNode(i + 1);
                  break;
                case 1:
                    textCell = document.createTextNode(teams[i]);
                  break;
                case 2:
                    textCell = document.createTextNode(points[i]);
                  break;
            }

        cell.appendChild(textCell);
        row.appendChild(cell);
        }
        tableBody.appendChild(row);
        table.appendChild(tableBody);
    }
}

// Función para borrar los campos del formulario
function deleteField(){
    document.getElementById("Position").value = "";
    document.getElementById("Team").value = "";
    document.getElementById("Points").value = "";
}

// Función para borrar la tabla
function deleteTable(){
    document.getElementById("Clasification").removeChild(document.getElementById("Positions"));
}

// Función para validar la posición dada en el formulario
function validatePosition(position) {
    if (isNaN(position) || position > teams.length + 1 || position == 0) {
      return false;
    }else{
        return true;
    }
    
}

// Función para validar los puntos dados en el formulario
function validatePoints(point) {
    if (isNaN(point)) {
        return false;
    }else{
        return true;
    }
    
}

// Creamos función para cambiar los elementos de la tabla
function changeTable(teams,points){
    let position = document.getElementById("Position").value;
    let team = document.getElementById("Team").value;
    let point = document.getElementById("Points").value;
    position--;

    if(validatePosition(position) && validatePoints(point)){

        deleteField();
        return alert("Has introducido algún dato incorrecto!");
        
    } else {
        if (position == teams.length) {
            teams.push(team);
            points.push(point);

        } else {
            teams.splice(position, 1, team);
            points.splice(position, 1, point);
        }
        deleteField();
        deleteTable();
        completeTable(teams,points);
    }
}


