(() => {
    type Hero = {
        name:string,
        age:number,
        powers:string[],
        getName?:()=>string
    }

    let myCustomVariable: (string | number | Hero) = 'Hello World';
    console.log(typeof myCustomVariable);
})();
