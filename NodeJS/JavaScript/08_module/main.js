import Dog, { pi, Animal, playWith as play } from "./library.js"; //非 default 要用{}包原名字 換名要用as
// let obj = new Animal;
// let dog = new Dog;
// dog.makeSound();
// import Dog, { playWith as play, Animal } from "./library.js";

let obj = new Dog(undefined, 3);
console.log(obj.weight, obj.location);
play(obj);
console.log(pi);
