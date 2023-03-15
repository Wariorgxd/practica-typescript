"use strict";
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
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name} - ${this.age}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Sebastian',
        age: 25,
        address: {
            id: 1,
            zip: '1231',
            city: 'Colombia'
        },
        getFullAddress: function (id) {
            throw new Error("Function not implemented.");
        }
    };
    const client2 = {
        name: 'Lisa',
        age: 30,
        address: {
            id: 3,
            zip: 'gsq221',
            city: 'Quito'
        },
        getFullAddress: function (id) {
            throw new Error("Function not implemented.");
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map