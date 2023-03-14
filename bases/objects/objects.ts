(() => {
    //objeto literal
    let flash: {name:string,age:number,powers:string[], getName?:()=>string} = {
        name: "Barry Allen",
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    let superman: {name:string,age:number,powers:string[], getName?:()=>string} = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super fuerza', 'volar'],
    }

    // flash = {
    //     name: 'Clark Kent',
    //     age: 60,
    //     powers: ['Super fuerza', 'volar'],
    //     getName():string{
    //         return this.name === undefined ? 'No tiene nombre' : this.name;
    //     }
    // }
    //
    // console.log(flash.getName());
})();
