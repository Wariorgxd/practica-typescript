(() => {
    //forma
    class Avenger {
        // private name:string;
        // public team:string;
        // public realName?:string;

        static avgAge:number = 35;

        constructor(
            private name:string = 'No name',
            private team:string = 'No team',
            public realName?:string) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName
        }

        public bio(){
            return `${this.name} (${this.team})`
        }

        static getAvgAge(){
            return this.name;
        }
    }

    const antman:Avenger = new Avenger('AntMan', 'Cap', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
})();
