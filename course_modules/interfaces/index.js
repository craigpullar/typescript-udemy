"use strict";
function greet(_a) {
    var name = _a.person.name;
    console.log("Hello " + name);
}
function changeName(_a) {
    var person = _a.person;
    person.greet('anything');
    person.name = 'Anna';
}
var person = {
    name: 'Max',
    age: 27,
    greet: function (lastName) {
        console.log('Hi Mr/Mrs ' + lastName);
    }
};
//Pass
greet({ person: person });
changeName({ person: person });
greet({ person: person });
greet({
    person: {
        name: 'Craig',
        age: 23,
        greet: function (lastName) {
            console.log('Hi Mr/Mrs ' + lastName);
        }
    }
});
//Interfaces in classes
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (lastName) {
        console.log(lastName);
    };
    return Person;
}());
var me = new Person('Craig', 23);
me.greet('Pullar');
var doubleFunction;
doubleFunction = function (value1, value2) { return (value1 + value2) * 2; };
console.log(doubleFunction(10, 20));
var oldPerson = {
    age: 57,
    name: 'old Person',
    greet: function (lastName) { console.log(lastName); }
};
oldPerson.greet('im old');
console.log(oldPerson.age);
//# sourceMappingURL=index.js.map