"use strict";
(function () {
    //定义动物类
    class Animal {
        name;
        age;
        constructor(name, age) {
            this.age = age;
            this.name = name;
        }
        sayHello() {
            console.log(`${this.name}在叫`);
        }
    }
    //定义狗类
    class Dog extends Animal {
        //子类Dog中的super就相当于父类 Animal
        color;
        constructor(name, age, color) {
            super(name, age);
            this.color = color;
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    //定义猫类
    class Cat extends Animal {
        sayHello() {
            super.sayHello();
        }
    }
    const dog = new Dog('xiaohei', 1, '黑色');
    const cat = new Cat('kate', 2);
    dog.sayHello();
    cat.sayHello();
})();
