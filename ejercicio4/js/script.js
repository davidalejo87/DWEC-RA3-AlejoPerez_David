// Función para abrir una ventana emergente

function openWindow(){

    // variables random para los parametros de la ventana emergente
    let random1= Math.random()*400;
    let random2= Math.random()*400;

    // parametros para la ventana emergente
    const params = '"resizable, width=400, height=400,left='+random1+',top='+random2+'"';

    // abrimos una ventana
    let newWindow = open("about:blank", "myWindowName", params);

    // metemos en variables la anchura y la altura de la ventana emergente
    let newWindowW = newWindow.outerWidth;
    let newWindowH = newWindow.outerHeight;

    // Función para que vaya decreciendo el tamaño de la ventana
    const change = setInterval(() => {

        if (newWindowW >= 160 && newWindowH >= 160){
            newWindow.resizeBy(-40,-40);
        
        }
    },1000);





}

