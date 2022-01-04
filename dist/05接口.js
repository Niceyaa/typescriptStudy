"use strict";
(function () {
    const obj = {
        name: "zs",
        age: 11,
        gender: '1'
    };
    // 定义类时，可以使类去实现一个接口，实现接口就是使类去满足接口的要求
    class MyClass {
        constructor(gender) {
            this.gender = gender;
        }
        sayHello() {
            console.log("hello");
        }
    }
    function printLabel(labelObj) {
        console.log(labelObj.label);
    }
    let myObj = {
        size: 10,
        label: '该对象包含属性label和size'
    };
    printLabel(myObj);
})();
