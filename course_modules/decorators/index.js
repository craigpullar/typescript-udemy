"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
function noop() { }
let Person = class Person {
    constructor() {
        console.log('Hi');
    }
};
Person = __decorate([
    logged
], Person);
//Factory
function logging({ shouldLog }) {
    return shouldLog ? logged : noop;
}
let Car = class Car {
};
Car = __decorate([
    logging({ shouldLog: true })
], Car);
//advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = class Plant {
    constructor() {
        this.name = "Green plant";
    }
};
Plant = __decorate([
    logging({ shouldLog: true }),
    printable
], Plant);
const plant = new Plant();
plant.print();
//Method decorators
const editable = (value) => (target, propName, descriptor) => {
    descriptor.writable = value;
};
const overwritable = (value) => (target, propName) => {
    const newDescriptor = {
        writable: value
    };
    return newDescriptor;
};
class Project {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(10000);
    }
}
__decorate([
    editable(false)
], Project.prototype, "calcBudget", null);
const project = new Project("Super Project");
project.calcBudget();
// project.calcBudget = function() { console.log(50000); }  //invalid
project.calcBudget();
console.log(project);
//Parameter Decorator
const printInfo = (target, methodName, paramIndex) => {
    console.log("target:", target);
    console.log("methodName:", methodName);
    console.log("paramindex:", paramIndex);
};
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentnumbers(mode, printAll) {
        printAll ? console.log(10000) : console.log(2000);
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentnumbers", null);
const course = new Course("Maths");
course.printStudentnumbers("anyhting", true);
course.printStudentnumbers("anyhting", false);
//# sourceMappingURL=index.js.map