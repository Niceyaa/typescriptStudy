"use strict";
(function () {
    const obj = {
        name: "zs",
        age: 11,
        gender: '1'
    };
    // 定义类时，可以使类去实现一个接口，实现接口就是使类去满足接口的要求
    class MyClass {
        gender;
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
    let myArray = ['bob', 'alice'];
    let strVal = myArray[0]; //其实当使用0(number)去做索引的时候，js会将其转成‘0’字符串的形式去索引，所以两者需要保持一直（返回值）
    let myObj = {
        size: 10,
        label: '该对象包含属性label和size'
    };
    printLabel(myObj);
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        breed;
        constructor(breed, name) {
            super(name);
            this.breed = breed;
        }
    }
    let p = {
        x: 1,
        y: 2
    };
    class myClass {
        currentDate;
        a = '1';
        constructor(currentDate) {
            this.currentDate = currentDate;
        }
        setTime(d) {
            this.currentDate = d;
        }
    }
    // p.x = 3 // error
    p.y = 4;
    // 使用接口控制类的constructor -- 错误
    // interface constructorInter{
    //     new (min:number,sec:number):any
    // }
    // class TimeClass implements constructorInter{
    //     constructor(min:number,sec:number){
    //     }
    // }
    // 使用接口控制类的constructor
    // interface constructorInter{
    //     new (min:number,sec:number):any
    // }
    // class TimeClass implements constructorInter{
    //     constructor(min:number,sec:number){
    //     }
    // }
    // let a:number[] = [1,2,3,4,5]
    let a = [1, 2, 3, 4, 5];
    let ro = a;
    // ro[0] = 1 // error
    // a = ro // error  只读数组不能直接赋值给普通数组，但是可以通过类型断言
    // a = ro as number[]
    a = ro;
    let mySearch;
    mySearch = function (source1, substring1) {
        let result = source1.search(substring1);
        return result > -1;
    };
    mySearch('1', '2');
})();
