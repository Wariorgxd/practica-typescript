"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}  ${lastName}`;
    };
    //esto es un error porque noName no es un string
    let noName;
    const name = fullName(noName, 'Stark');
    console.log(name);
})();
