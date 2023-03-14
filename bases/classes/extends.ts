(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
            public team: string,
            public alive: boolean
        ) {
            // console.log('Avenger llamado');
        }

        protected getFullName():string {
            return `${this.name} - ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            team: string,
            alive: boolean,

            public isMutant?:boolean,
        ) {
            super(name, realName, team, alive);
            // console.log('Constructor Xmen llamado')
        }

        getFullNameDesdeXmen():void {
            console.log(super.getFullName());
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullRealName(name:string) {
            if(name.length < 3){
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }else{
                this.realName = name;
            }
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', 'Xmen', true, true);
    // console.log(wolverine.fullName);

    wolverine.fullRealName = 'Sebastian';
    // console.log(wolverine.fullName);

})();
