"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnique = exports.findUniq = exports.findOdd = exports.arrayDiff = exports.isPar = exports.descendingOrder = void 0;
function descendingOrder(n) {
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
const isPar = (n) => n % 2 === 0;
exports.isPar = isPar;
function arrayDiff(a, b) {
    let arr = [];
    a.forEach((item) => {
        if (!b.includes(item)) {
            arr.push(item);
        }
    });
    return arr;
}
exports.arrayDiff = arrayDiff;
const findOdd = (xs) => {
    let num = xs.sort((a, b) => a - b)[0];
    let count = 0;
    xs.forEach((item) => {
        if (item === num) {
            count++;
        }
    });
    if (count % 2 !== 0) {
        return num;
    }
    return (0, exports.findOdd)(xs.filter((item) => item !== num));
};
exports.findOdd = findOdd;
function findUniq(arr) {
    let num = arr.sort((a, b) => a - b)[0];
    let count = 0;
    arr.forEach((item) => {
        if (item === num) {
            count++;
        }
    });
    if (count === 1) {
        return num;
    }
    return findUniq(arr.filter((item) => item !== num));
}
exports.findUniq = findUniq;
function findUnique(arr) {
    let contador = 0;
    arr.forEach(x => {
        if (arr.indexOf(x) === arr.lastIndexOf(x)) {
            contador++;
        }
    });
    return contador;
}
exports.findUnique = findUnique;
findUnique([1, 1, 1, 2, 1, 1, 1]);
//# sourceMappingURL=ejercicios.js.map