//valid
const myName: string = 'Craig';
function getMyName() {
    return myName;
}
console.log(getMyName);


//More specific
function getMyStingName(): string {
    return myName;
}

//valid
function sayHello(): void {
    console.log(myName)
}

//invalid
function sayHelloAndReturn(): void {
    console.log('Hello');
    return myName;
}

//arg types

//valid
function multiply(value1, value2): number {
    return value1 * value2;
}
multiply('a', 2);

//better
function multiplyNumbers(value1: number, value2: number): number {
    return value1 * value2;
}