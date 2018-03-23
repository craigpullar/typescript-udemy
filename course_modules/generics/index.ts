//simple generic
function echo(data: any) {
    return data;
}
console.log(echo('Max'));
console.log(echo(27).length); //isValid
console.log(echo({ hi: 'world' }));

//better generic

function betterEcho<T>(data: T) {
    return data;
}

// console.log(betterEcho(23).length); //isInvalid because we added <T>
console.log(betterEcho<number>(27));
// console.log(betterEcho<number>("27")); //invalid because param type does not match generic type


//Built in generics
const testResults: Array<number> = [1,2,3,4,5];
// testResults.push('sdfsd') kicks off becuase not of type number
testResults.push(...testResults) //valid

//Arrays
function printAll<T>(args: T[]) {
    args.forEach(elem => console.log(elem));
}
printAll(testResults); //valid
// printAll<string>(testResults); //invalid;

//generic types
let echo2: <T>(data: T) => T;
echo2 = echo;

//generic class
class SimpleMath <T extends number | string, U extends number | string> {
    baseValue: T;
    multiply: U;

    constructor(baseValue: T, multiply: U) {
        this.baseValue = baseValue;
        this.multiply = multiply;
    }

    calculate(): number { 
        return +this.baseValue * +this.multiply;
    }
} 

const simpleMath = new SimpleMath<string, number>('200', 10);
simpleMath.baseValue = "20";
simpleMath.multiply = 2;
console.log(simpleMath.calculate());
