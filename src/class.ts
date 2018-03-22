// class Person {
//     name: string;
//     private type: string;
//     protected age: number = 27;

//     constructor(name: string, public username: string) {
//         this.name = name;
//         this.type = '';
//     }

//     printAge() {
//         console.log(this.age);
//     }

//     setType(type: string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }

// const person = new Person('Craig', 'craig12345');
// person.printAge();
// person.setType('Cool guy');

//Inheritance
// class Craig extends Person {
//     constructor(username: string) {
//         super('Craig', username);
//         this.age = 31;
//     }
// }

// const me = new Craig('Craig12234');
// me.printAge();
// me.setType('Hey');

//Getters & Setters
class Plant {
    private _species: string;
    private defaultSpecies: string = "Default Species";

    constructor() {
        this._species = this.defaultSpecies;
    }

    set species(value: string) {
        value.length > 3 ?
            this._species = value: 
            this._species = this.defaultSpecies;
    }

    get species() {
        return this._species;
    }
}


const myPlant = new Plant();
myPlant.species = 'I am a new species of plant';
console.log(myPlant.species);

class Helpers {
    static PI: number = 3.14;

    static doublePI() {
        return this.PI * 2;
    }
}

console.log(Helpers.PI);
console.log(Helpers.doublePI());

//Abstract
/* 
    CANNOT BE INSTATIATED! 
    Can only be extended

*/
abstract class Project {
    projectName: string = "Default";
    budget: number = 0;

    /* abstract functions within a class
        NEEDS to be implemented in the child class
    */
    abstract changeName(name: string): void

    calcBudget() {
        return this.budget*2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

const myProject = new ITProject();
myProject.changeName("Hey");

//private constructors
class OnlyOne {
    private static instance: OnlyOne;
    //** Readonly  */
    private constructor(public readonly name: string) {}

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only one');
        }
        return OnlyOne.instance;
    }
}

//Singleton
const myInstance = OnlyOne.getInstance()