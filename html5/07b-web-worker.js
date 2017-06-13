const cuentaAtras = (numero) => {

    //notificamos al Worker el numero indicado
    postMessage(numero);

    //formzamos un lapso de tiempo
    setTimeout(()=>{
        cuentaAtras(--numero); //llamada recursiva
    },1000);
};

cuentaAtras(10);