"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`${this.name}在叫`);
    }
}
const dog1 = new Dog('小黑', 12);
const dog2 = new Dog('小白', 11);
dog1.bark();
dog2.bark();
