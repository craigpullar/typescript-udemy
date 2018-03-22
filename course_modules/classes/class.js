"use strict";
// class Person {
//     name: string;
//     private type: string;
//     protected age: number = 27;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Plant = /** @class */ (function () {
    function Plant() {
        this.defaultSpecies = "Default Species";
        this._species = this.defaultSpecies;
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            value.length > 3 ?
                this._species = value :
                this._species = this.defaultSpecies;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var myPlant = new Plant();
myPlant.species = 'I am a new species of plant';
console.log(myPlant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.doublePI = function () {
        return this.PI * 2;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.doublePI());
//Abstract
/*
    CANNOT BE INSTATIATED!
    Can only be extended

*/
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
myProject.changeName("Hey");
//private constructors
var OnlyOne = /** @class */ (function () {
    //** Readonly  */
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//Singleton
var myInstance = OnlyOne.getInstance();
