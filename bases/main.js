"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
define("ejercicios", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findUnique = exports.findUniq = exports.findOdd = exports.arrayDiff = exports.isPar = exports.descendingOrder = void 0;
    function descendingOrder(n) {
        let arr = n.toString().split('');
        let arrNumber = arr.map((item) => {
            return parseInt(item);
        });
        arrNumber.sort((a, b) => {
            return b - a;
        });
        return parseInt(arrNumber.join(''));
    }
    exports.descendingOrder = descendingOrder;
    const isPar = (n) => n % 2 === 0;
    exports.isPar = isPar;
    function arrayDiff(a, b) {
        let arr = [];
        a.forEach((item) => {
            if (!b.includes(item)) {
                arr.push(item);
            }
        });
        return arr;
    }
    exports.arrayDiff = arrayDiff;
    const findOdd = (xs) => {
        let num = xs.sort((a, b) => a - b)[0];
        let count = 0;
        xs.forEach((item) => {
            if (item === num) {
                count++;
            }
        });
        if (count % 2 !== 0) {
            return num;
        }
        return (0, exports.findOdd)(xs.filter((item) => item !== num));
    };
    exports.findOdd = findOdd;
    function findUniq(arr) {
        let num = arr.sort((a, b) => a - b)[0];
        let count = 0;
        arr.forEach((item) => {
            if (item === num) {
                count++;
            }
        });
        if (count === 1) {
            return num;
        }
        return findUniq(arr.filter((item) => item !== num));
    }
    exports.findUniq = findUniq;
    function findUnique(arr) {
        let contador = 0;
        arr.forEach(x => {
            if (arr.indexOf(x) === arr.lastIndexOf(x)) {
                contador++;
            }
        });
        return contador;
    }
    exports.findUnique = findUnique;
    findUnique([1, 1, 1, 2, 1, 1, 1]);
});
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName}  ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName}  ${lastName}`;
        }
    };
    let noName;
    const name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName || 'no hay nombre'}  ${lastName || 'no hay apellido'}`;
    };
    let noName;
    const name = fullName(noName, 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}  ${lastName}`;
    };
    let noName;
    const name = fullName(noName, 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super fuerza', 'volar'],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super fuerza', 'volar'],
    };
})();
(() => {
    let myCustomVariable = 'Hello World';
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11'];
    const villian = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villian.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
})();
(() => {
})();
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
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    console.log(` I'm ${batman}, ${abc.toString()}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map