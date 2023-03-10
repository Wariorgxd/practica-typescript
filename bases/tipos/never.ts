(() => {
    //Las funciones de tipo never no tienen que
    // tener un punto alcanzable al finalizar la función
    //Funciones con never = funciones que reportan errores
    const error = (message:string):(never|number) => {
        if(false){
            throw new Error(message);
        }
        return 1;
    }

    error('Auxilio!');
})();
