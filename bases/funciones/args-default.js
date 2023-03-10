"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName}  ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName}  ${lastName}`;
        }
    };
    //esto es un error porque noName no es un string
    let noName;
    const name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
