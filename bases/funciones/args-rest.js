"use strict";
(() => {
    // Argumentos Rest
    // Se utiliza para indicar que una función puede
    // recibir un número indefinido de argumentos
    // En este caso, el primer argumento es obligatorio
    // y los demás son opcionales
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
