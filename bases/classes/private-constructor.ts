(() => {
    class Apocalypsis {
        static instance:Apocalypsis;
        private constructor(
            public name:string
        ) {}

        static callApocalypsis():Apocalypsis{
            if(!Apocalypsis.instance){
                Apocalypsis.instance = new Apocalypsis('Soy Apocalypsis... el único');
            }
            return Apocalypsis.instance;
        }

        changeName(newName:string):string{
            return this.name = newName;
        }

    }

    const apocalypsis1 = Apocalypsis.callApocalypsis();
    const apocalypsis2 = Apocalypsis.callApocalypsis();
    const apocalypsis3 = Apocalypsis.callApocalypsis();

    apocalypsis1.changeName('Xavier');

    // const apocalypsis = new Apocalypsis('Soy Apocalypsis... el único');
    // const apocalypsis2 = new Apocalypsis('Soy Apocalypsis2... el único');
    // const apocalypsis3 = new Apocalypsis('Soy Apocalypsis3... el único');
    console.log(apocalypsis1, apocalypsis2, apocalypsis3);
})();
