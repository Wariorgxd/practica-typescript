(() => {
    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const saveTheWorld = ():string => `El mundo esta salvado`;

    let myFunction: (a:number,b:number) => number;

    //* myFunction = 10;
    //* console.log(myFunction);

    //? myFunction = addNumbers;
    //? console.log(myFunction(1,2));
    //?
    //? myFunction = greet;
    //? console.log(myFunction('Sebastian'));
    //?
    //? myFunction = saveTheWorld;
    //? console.log(myFunction());
})();
