(()=>{
    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 2500);
    const falcon = new FlyingAvenger('Falcon', 1700);
    console.log(hulk);
    console.log(falcon);
})();
