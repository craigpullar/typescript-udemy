//enum
enum Color {
    Gray, //0
    Green = 100,
    Blue //101
}

let myColor: Color = Color.Blue;

//string
const myName: string = 'Craig';


//Function type
function multiply(a: number, b: number): number {
    return a * b;
}
function sayHello(): void {
    console.log('Hello');
}
//valid
let myMultiply: (a: number, b: number) => number = multiply;
//invalid
myMultiply = sayHello;

//Check types
const finalValue = 'A string';
const isString = typeof finalValue === 'string'; //true

// never type (never returns a value)
function neverReturns(): never {
    throw new Error('An Error!');
}

//Nullable types
let canBeNull = 12 //Number
canBeNull = null;
let canAlsoBeNull; //any
canAlsoBeNull = null;
//Turning strict null types on (in tsconfig) will cause an error

let nullType : null = null; //valid even in strict mode
nullType = 12; //invalid

//bool type
let myBool: boolean = true;
myBool = 27 //invalid