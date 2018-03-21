//block scope of let
let myVar = 'some value';
function reset() { //hoisted
    // console.log(myVar) //does not exist in this scope
    let myVar = null;
    console.log(myVar);
};

const nonGlobalReset = function() { //not hoisted
    myVar = 'Heyy';
    console.log(myVar);
};
console.log(myVar); //some value

// http://kangax.github.io/compat-table/es6/ -> Compatibility table for ES6 and TS

//Arrow Functions in ts
const myArrowFunction = (a: number, b: number): number => a*b;

//Default Params
const countdown = (start: number = 10, end: number = start - 5): void => {
    while(start > end) start--;
    console.log('Done!', start);
}