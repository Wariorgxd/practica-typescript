
export function descendingOrder(n: number): number {
    // your code here
    let arr = n.toString().split('');
    let arrNumber = arr.map((item) => {
        return parseInt(item);
    });
    arrNumber.sort((a, b) => {
        return b - a;
    });
return parseInt(arrNumber.join(''));
}

//? export function descendingOrder(n: number): number {
//?     return parseInt(n.toString().split('').sort().reverse().join(''));
//? }

export const isPar = (n:number):boolean => n % 2 === 0;

//? export function isPar(n:number):boolean{
//?     return n % 2 === 0;
//? }

export function arrayDiff(a: number[], b: number[]): number[] {
    // your code here
    let arr:number[] = []; //Crea un array de números vacio para almacenar los valores que no se repiten
    a.forEach((item) => { //Se utiliza forEach para recorrer el array a comparar
        if (!b.includes(item)) { //Evaluamos si el array b no incluye el item del array a
            arr.push(item); //Si no lo incluye, se agrega al array vacio
        }
    });
    return arr; //Se retorna el array con los valores que no se repiten
}

export const findOdd = (xs: number[]): number => {
    // happy coding!
    let num:number = xs.sort((a, b) => a - b)[0];
    let count:number = 0;
    xs.forEach((item) => {
        if (item === num) {
            count++;
        }
    }
    );
    if (count % 2 !== 0) {
        return num;
    }

    return findOdd(xs.filter((item) => item !== num));
};

// export const findOdd = (xs: number[]): number => {
//     // happy coding!
//     return xs.reduce( (a,b)=> a^b);
// };

export function findUniq(arr: number[]): number {
    // Do the magic
    let num:number = arr.sort((a, b) => a - b)[0];
    let count:number = 0;
    arr.forEach((item) => {
        if (item === num) {
            count++;
        }
    }
    );
    if (count === 1) {
        return num;
    }

    return findUniq(arr.filter((item) => item !== num));
}

export function findUnique(arr:number[]):number {
    let contador:number = 0;
    arr.forEach( x => {
        if(arr.indexOf(x) === arr.lastIndexOf(x)) {
            contador++;
        }
    });
    return contador;
}

findUnique([1,1,1,2,1,1,1]);

export function oddOrEven(array: number[]) {
    // enter code here
    let sum:number = 0;
    for (const number of array) {
        sum += number;
    }
    return sum % 2 === 0 ? 'even' : 'odd';
}

