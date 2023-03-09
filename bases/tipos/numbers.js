"use strict";
(() => {
    let avengers = 4;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = 123;
    avengers = Number('1a23');
    console.log({ avengers });
    let esPar = avengers % 2 === 0;
    console.log(esPar);
})();
