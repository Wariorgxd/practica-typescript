
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
