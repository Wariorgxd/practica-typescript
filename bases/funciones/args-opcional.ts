(() => {
    //? indica que el argumento es opcional
    const fullName = (firstName?: string, lastName?: string):string => {
        return `${firstName || 'no hay nombre'}  ${lastName || 'no hay apellido'}`;
    }

    //esto es un error porque noName no es un string
    let noName:any;

    const name = fullName(noName, 'Stark');
    console.log({name});
})();
