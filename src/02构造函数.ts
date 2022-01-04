class Dog {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    bark() {
        console.log(`${this.name}在叫`)
    }
}

const dog1 = new Dog('小黑', 12)
const dog2 = new Dog('小白', 11)
dog1.bark()
dog2.bark()

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
    static standardGreeting = "Hello, there";
    greeting: string = '1';
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
