"use strict";
(() => {
    //? indica que el argumento es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName || 'no hay nombre'}  ${lastName || 'no hay apellido'}`;
    };
    //esto es un error porque noName no es un string
    let noName;
    const name = fullName(noName, 'Stark');
    console.log({ name });
})();
