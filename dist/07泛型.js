"use strict";
/*
* 在定义函数或者类时，如果不知道类型不明确就可以使用泛型
*
* */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let result = fn(10);
let result2 = fn("10");
// console.log(result, result2)
// 定义多个泛型
function fn2(a, b) {
    return a;
}
function fn3(a) {
    return a.length;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
