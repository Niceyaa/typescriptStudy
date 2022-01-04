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
// 构造函数
/*class Greeter {
    greeting: string

    constructor(message: string) {
        this.greeting = message
    }

    greet(): string {
        return "Hello" + this.greeting
    }
}

let greeter:Greeter
greeter = new Greeter('Hello World!')
console.log(greeter.greet(),Greeter)*/
class Greeter {
    constructor() {
        this.greeting = '1';
    }
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
let greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
