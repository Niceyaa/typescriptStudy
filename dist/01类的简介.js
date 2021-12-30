"use strict";
/*
* 使用class 关键字定义一个类
* 对象中主要包含两个部分
*   方法
*   属性
*
*   定义属性/方法的时候，通过 static 关键字定义静态属性/方法，只有通过类名去访问，实例不能访问
*   定义属性的时候，通过 readonly 关键字定义只读属性，无法修改
*
* */
class Person {
    constructor() {
        // readonly name: string = '孙悟空'
        this.name = '孙悟空';
    }
    sayHello() {
        console.log('hhhh');
    }
}
Person.age = 1;
const per = new Person();
per.name = '猪八戒';
per.sayHello();
console.log(per);
console.log(Person.age);
