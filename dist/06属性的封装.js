"use strict";
(function () {
    class Person {
        // 定义属性的时候，可以添加属性修饰符
        /*
        *  public 修饰的属性可以在任意位置访问（修改），默认值
        *  private 修饰的属性，只能在类内部进行访问（修改）
        *  protected 修饰的属性，和private差不多，protected修饰的属性，但在子类内部是可以访问的
        *  static 定义静态属性，只能通过类名去访问
        * */
        _name;
        gender;
        static hobby = '摸鱼';
        _age;
        get name() {
            return this._name;
        }
        set name(value) {
            console.log("我执行了吗--name");
            this._name = value;
        }
        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this.gender = gender;
        }
    }
    class BlackPerson extends Person {
        test() {
            console.log(this.gender);
        }
    }
    /*class C {
        public name:string
        public age:number

        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
    }*/
    // 简写
    class C {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const per = new Person('zs', 12, 'female');
    const blackPer = new Person('ls', 121, 'male');
    const c = new C('ls', 121);
    console.log(per);
    console.log(blackPer);
    console.log(per.name);
    console.log(Person.hobby);
    console.log(BlackPerson.hobby);
    console.log(C);
    // private
    class Animal {
        name;
        constructor(theName) {
            this.name = theName;
        }
    }
    // console.log(new Animal('tiger').name); // error private修饰的属性，只能在类内部进行访问
    class Rhino extends Animal {
        constructor() {
            super('Rhino');
        }
    }
    class Employee {
        name;
        constructor(theName) {
            this.name = theName;
        }
    }
    let animal = new Animal('Goat');
    let rhino = new Rhino();
    let employee = new Employee('Bob');
    animal = rhino;
    // rhino可以赋值给animal，因为Rhino是Animal的子类，他们共享了private name，但是Employee虽然也有private name 但是显然和Animal中的不一样，所以不兼容，保错（使用private和protected都会有这样的限制）
    // animal = employee  //Type 'Employee' is not assignable to type 'Animal'.   Types have separate declarations of a private property 'name'.
    let passCode = 'secret passcode';
    class User {
        _fullName = 'smith peta';
        get fullName() {
            return this._fullName;
        }
        set fullName(name) {
            if (passCode && passCode === 'secret passcode') {
                this._fullName = name;
            }
            else {
                console.log('Error');
            }
        }
    }
    let user = new User();
    user.fullName = 'Bob';
    if (user.fullName)
        alert(user.fullName);
})();
