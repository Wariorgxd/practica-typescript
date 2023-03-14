(() => {
    // console.log('let');
    //Ya no se utiliza var, se utiliza let

    //Siempre trabajar con constantes
    const nombre:string = 'Sebastian';

    function getName():void {
        console.log('Antiguo getName')
    }

    // getName = () => { console.log('Nuevo getName')};
    // getName();

})();
