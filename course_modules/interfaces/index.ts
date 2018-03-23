interface NamedPerson {
    name: string,
    age?: number, //?optional
    [propName: string]: any //Yet to be declared property
    greet(lastName: string): void
}

function greet({ person: { name } }: { person: NamedPerson }): void {
    console.log(`Hello ${name}`);
}
function changeName({ person }: { person: NamedPerson }): void {
    person.greet('anything');
    person.name = 'Anna';
}

const person = {
    name: 'Max',
    age: 27,
    greet(lastName: string) {
        console.log('Hi Mr/Mrs ' + lastName);
    }
}

//Pass
greet({ person });
changeName({ person });
greet({ person });
greet({ //Object literals are checked more strictly
    person : {
    name: 'Craig',
    age: 23,
    greet(lastName: string) {
        console.log('Hi Mr/Mrs ' + lastName);
    }
    }
});


//Interfaces in classes
class Person implements NamedPerson {
    name: string;
    age?: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(lastName: string): void {
        console.log(lastName);
    }
}

const me = new Person('Craig', 23);
me.greet('Pullar');


//Function types
interface DoubleValueFunc {
    (number1: number, number2: number): number //Must be function
}

let doubleFunction: DoubleValueFunc;
doubleFunction = (value1: number, value2: number): number => (value1+value2)*2;
console.log(doubleFunction(10,20));

//Interfcae Inheritance
interface AgedPerson extends NamedPerson {
    age: number
}

const oldPerson: AgedPerson = {
    age: 57,
    name: 'old Person',
    greet(lastName: string) { console.log(lastName) }
}

oldPerson.greet('im old');
console.log(oldPerson.age);
