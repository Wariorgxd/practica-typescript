(() => {
    interface Hero {
        name:string,
        age:number,
        powers:string[],
        getName?:()=>string
    }
    //objeto literal
    let flash: Hero = {
        name: "Barry Allen",
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super fuerza', 'volar'],
    }
})();
