//Exercise 1
class Car {
    private name: string;
    private _accelaration: number = 0;

    constructor({ name }: { name: string }) {
        this.name = name
    }

    public honk(): void {
        console.log('Tooooot');
    }

    public accelerate(speed: number): void {
        this._accelaration += speed;
    }

    get acceleration(): number {
        return this._accelaration;
    }
}

const car = new Car({ name: "BMW" });
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//Exercise 2
abstract class BaseObject {
    public width = 0;
    public length = 0;

    public abstract calcSize(): number;
}

class Rectangle extends BaseObject {
    public calcSize(): number {
        return this.width * this.length;
    }
}
rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

//Exercise 3
class Person {
    private _firstName: string = '';

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if(value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }
}
const person = new Person;
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);