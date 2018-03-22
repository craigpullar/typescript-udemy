"use strict";
var MyMath;
(function (MyMath) {
    function add(a, b) {
        return a + b;
    }
    MyMath.add = add;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateCircumference(diamter) {
        return diamter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var CircleMath;
    (function (CircleMath) {
        function createCircle() {
            return 5;
        }
        CircleMath.createCircle = createCircle;
    })(CircleMath = MyMath.CircleMath || (MyMath.CircleMath = {}));
    var PI = 3.13;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=index.js.map