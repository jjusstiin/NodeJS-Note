
// export default Dog;
// export {Animal, playWith}; //也可以另外export
export const pi = 3.14;
export function playWith(obj) {
    obj.makeSound();
}

export class Animal {
    constructor(weightValue = 1) {
        this.weight = weightValue;
    }
    makeSound() {
        alert("Animal: ...");
    }
}

export default class Dog extends Animal { //default 只能有一個 可以 import 直接換名字
    constructor(location = "Earth", weightValue) {
        super(weightValue);
        this.location = location;
    }
    makeSound() {
        alert("Won! Won!");
    }
}
