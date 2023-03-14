"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const cyclope = new Xmen('Cyclope', 'Scott Summers');
    const magneto = new Villian('Magento', 'Erik Lensherr');
    const printName = (caracter) => {
        console.log(caracter.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name = 'No name', team = 'No team', realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Cap', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName, team, alive) {
            this.name = name;
            this.realName = realName;
            this.team = team;
            this.alive = alive;
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, team, alive, isMutant) {
            super(name, realName, team, alive);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullRealName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }
            else {
                this.realName = name;
            }
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', 'Xmen', true, true);
    wolverine.fullRealName = 'Sebastian';
})();
(() => {
    class Apocalypsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalypsis() {
            if (!Apocalypsis.instance) {
                Apocalypsis.instance = new Apocalypsis('Soy Apocalypsis... el único');
            }
            return Apocalypsis.instance;
        }
        changeName(newName) {
            return this.name = newName;
        }
    }
    const apocalypsis1 = Apocalypsis.callApocalypsis();
    const apocalypsis2 = Apocalypsis.callApocalypsis();
    const apocalypsis3 = Apocalypsis.callApocalypsis();
    apocalypsis1.changeName('Xavier');
    console.log(apocalypsis1, apocalypsis2, apocalypsis3);
})();
//# sourceMappingURL=main.js.map