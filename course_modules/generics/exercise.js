"use strict";
class MyMap {
    constructor() {
        this.map = {};
    }
    setItem(key, value) {
        Object.assign(this.map, { [key]: value });
    }
    getItem(key) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        console.log(this.map);
    }
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
//# sourceMappingURL=exercise.js.map