function logged(constructorFn: Function) {
    console.log(constructorFn);
}

function noop() {}

@logged
class Person {

    constructor() {
        console.log('Hi');
    }

}

//Factory
function logging({ shouldLog } : { shouldLog: boolean }): Function {
    return shouldLog ? logged: noop;
}

@logging({ shouldLog: true })
class Car {

}

//advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging({ shouldLog: true })
@printable
class Plant {
    name = "Green plant"
}

const plant = new Plant();
(<any>plant).print();

//Method decorators
const editable = (value: boolean) => 
    (target: any, propName: string, descriptor: PropertyDescriptor) => {
        descriptor.writable = value;
    }

const overwritable = (value:boolean): Function =>
    (target: any, propName: string): PropertyDescriptor => {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }

class Project {
    // @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(10000);
        
    }
}

const project = new Project("Super Project");
project.calcBudget();
// project.calcBudget = function() { console.log(50000); }  //invalid
project.calcBudget();
console.log(project);


//Parameter Decorator
const printInfo = (target: any, methodName: string, paramIndex: number) => {
    console.log("target:", target);
    console.log("methodName:", methodName);
    console.log("paramindex:", paramIndex);
    
}
class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentnumbers(mode: string, @printInfo printAll: boolean): void {
        printAll ? console.log(10000) : console.log(2000);
    }
}

const course = new Course("Maths");
course.printStudentnumbers("anyhting", true);
course.printStudentnumbers("anyhting", false);
