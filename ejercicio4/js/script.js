// Función para abrir una ventana emergente

function openWindow(){

    // variables random para los parametros de la ventana emergente
    let random1= Math.random()*1920;
    let random2= Math.random()*1080;

    // parametros para la ventana emergente
    const params = '"resizable, width=400, height=400,left='+random1+',top='+random2+'"';

    // abrimos una ventana
    let newWindow = open("about:blank", "myWindowName", params);

    // metemos en variables la anchura y la altura de la ventana emergente
    let newWindowW = newWindow.outerWidth;
    let newWindowH = newWindow.outerHeight;

    // Función para que vaya decreciendo el tamaño de la ventana
    setInterval(function changeSizeD(){

        if (newWindowW >= 160 && newWindowH >= 160){
            newWindow.resizeBy(-40,-40);
        
        }
    },1000);





}

// Función para cambiar tamaño de la ventana
/*
function changeSize(){

    while (newWindow.outerWidth > 160){
        newWindow.resizeTo(width=-40,height=-40);
    }

}
*/
