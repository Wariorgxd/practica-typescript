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
    avengers = 2;
    console.log({ avengers });
    let esPar = avengers % 2 === 0;
    console.log(esPar);
})();
//# sourceMappingURL=numbers.js.map