let userData = {
    name: "Craig",
    age: 23,
};
//invalid
userData = {}
userData = {
    a: 'Hello'
    b: 7
}

let otherUserData: { name: string, age: number } = {
    name: 'Pete',
    age: 198,
    c: "eyyy"//invalid
}



let complex: { data: number[], output: (all: boolean) => number[] };
complex = {
    data: [0,1,2,3,4],
    output: () => [5,6,7],
}


//Type alias
type complex = { data: number[], output: (all: boolean) => number[] };

let complex2: complex = {
    data: [0, 1, 2, 3, 4],
    output: () => [5, 6, 7],
};

//union tyoes
let myRealAge: string|number  = '27'; //valid
myRealAge = 27; //valid
myRealAge = true; //invalid