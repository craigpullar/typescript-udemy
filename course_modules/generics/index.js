"use strict";
//simple generic
function echo(data) {
    return data;
}
console.log(echo('Max'));
console.log(echo(27).length); //isValid
console.log(echo({ hi: 'world' }));
//better generic
function betterEcho(data) {
    return data;
}
// console.log(betterEcho(23).length); //isInvalid because we added <T>
console.log(betterEcho(27));
// console.log(betterEcho<number>("27")); //invalid because param type does not match generic type
//Built in generics
const testResults = [1, 2, 3, 4, 5];
// testResults.push('sdfsd') kicks off becuase not of type number
testResults.push(...testResults); //valid
//Arrays
function printAll(args) {
    args.forEach(elem => console.log(elem));
}
printAll(testResults); //valid
// printAll<string>(testResults); //invalid;
//generic types
let echo2;
echo2 = echo;
//generic class
class SimpleMath {
    constructor(baseValue, multiply) {
        this.baseValue = baseValue;
        this.multiply = multiply;
    }
    calculate() {
        return +this.baseValue * +this.multiply;
    }
}
const simpleMath = new SimpleMath('200', 10);
simpleMath.baseValue = "20";
simpleMath.multiply = 2;
console.log(simpleMath.calculate());
//# sourceMappingURL=index.js.map