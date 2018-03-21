"use strict";
//block scope of let
var myVar = 'some value';
function reset() {
    // console.log(myVar) //does not exist in this scope
    var myVar = null;
    console.log(myVar);
}
;
var nonGlobalReset = function () {
    myVar = 'Heyy';
    console.log(myVar);
};
console.log(myVar); //some value
// http://kangax.github.io/compat-table/es6/ -> Compatibility table for ES6 and TS
//Arrow Functions in ts
var myArrowFunction = function (a, b) { return a * b; };
//Default Params
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    while (start > end)
        start--;
    console.log('Done!', start);
};
