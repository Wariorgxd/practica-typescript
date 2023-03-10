"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPar = exports.descendingOrder = void 0;
function descendingOrder(n) {
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
exports.descendingOrder = descendingOrder;
//? export function descendingOrder(n: number): number {
//?     return parseInt(n.toString().split('').sort().reverse().join(''));
//? }
const isPar = (n) => n % 2 === 0;
exports.isPar = isPar;
//? export function isPar(n:number):boolean{
//?     return n % 2 === 0;
//? }
