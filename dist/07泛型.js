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
    name;
    constructor(name) {
        this.name = name;
    }
}
function identify(arg) {
    return arg;
}
let myIdentify = identify;
class BeeKeeper {
    hasMask = false;
}
class ZooKeeper {
    nameTag = 'name-tag';
}
class Animal {
    numLegs = 4;
}
/*
class Bee extends Animal {
    keeper: BeeKeeper
}

class Lion extends Animal {
    keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c()
}

createInstance(Lion).keeper.nameTag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!*/
