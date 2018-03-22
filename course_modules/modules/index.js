// / <reference path="circleMath.ts" />
// / <reference path="addMath.ts" />
// / <reference path="MyMath.ts" />
System.register(["./math/rectangle.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var rectangle_js_1;
    return {
        setters: [
            function (rectangle_js_1_1) {
                rectangle_js_1 = rectangle_js_1_1;
            }
        ],
        execute: function () {
            // const PI = 2.99 ;
            // console.log(MyMath.calculateCircumference(2));
            // console.log(MyMath.CircleMath.createCircle());
            console.log('hi');
            console.log(rectangle_js_1.calculateRectangle(3, 5));
        }
    };
});
//# sourceMappingURL=index.js.map