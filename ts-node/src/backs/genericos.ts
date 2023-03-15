// import { Hero as SuperHero, Hero2, Hero3, Hero4 } from "./classes/Hero";
// import { Hero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import powers, {Power} from "./data/powers";
//
// const Hero = 123;

// console.log('Hola Sebastian!');

// const ironman = new Hero('Tony Stark', 1, 29);

// console.log(ironman);
// console.log(ironman.power);

// console.log(powers[0]);

import {printObject, genericFunction, genericFunctionArrow} from "../generics/generics";
import {Hero, Villian } from "../interfaces";


// printObject(123);
// printObject('123');
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3,4,5,6,7,8,9]);

// console.log(genericFunction(123.123).toFixed(2));
// console.log(genericFunction('123.123').toUpperCase());
// console.log(genericFunction(new Date()).getDate());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
console.log(genericFunctionArrow<Hero>(deadpool).realName);
