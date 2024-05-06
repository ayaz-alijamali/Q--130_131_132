// Question _______________ 130


// utils.ts
export function addNumbers(a: number, b: number): number {
    return a + b;
};

// main.ts
import { addNumbers } from './utils';

const result = addNumbers(10, 5);
console.log(result); // Output: 15


// Question _______________ 131


// car.ts
export class Car {
    constructor(private brand: string, private model: string) {}

    displayInfo(): void {
        console.log(`This is a ${this.brand} ${this.model}.`);
    }
};


// Question ______________ 132


// module.js
const greeting = "Hello, ";
export default greeting;

// main.js
import greeting from './module.js';
console.log(greeting + "World"); // Output: Hello, World



// utils.js
export function add(a, b) {
    return a + b;
}
export function subtract(c, d) {
    return c - d;
}

// main.js
import { add, subtract } from './utils.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
