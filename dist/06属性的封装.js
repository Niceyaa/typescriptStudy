"use strict";
(function () {
    class Person {
        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this.gender = gender;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            console.log("我执行了吗--name");
            this._name = value;
        }
    }
    Person.hobby = '摸鱼';
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
})();
