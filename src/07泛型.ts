/*
* 在定义函数或者类时，如果不知道类型不明确就可以使用泛型
*
* */

function fn<T>(a: T): T {
    return a
}

// 可以直接调用具有泛型的函数
let result = fn(10)
let result2 = fn<string>("10")
// console.log(result, result2)

// 定义多个泛型
function fn2<T, K>(a: T, b: K): T {
    return a
}

interface myInter {
    length: number
}

function fn3<T extends myInter>(a: T): number {
    return a.length
}

class MyClass<T> {
    name: T

    constructor(name: T) {
        this.name = name
    }
}

// 泛型接口
/*interface IT{
    <T>(arg:T): T
}

function identify<T>(arg:T):T{
    return arg
}
let myIdentify: IT = identify*/
interface IT<T> {
    (arg: T): T
}

function identify<T>(arg: T): T {
    return arg
}

let myIdentify: IT<number> = identify

class BeeKeeper {
    hasMask: boolean = false
}

class ZooKeeper {
    nameTag: string = 'name-tag'
}

class Animal {
    numLegs: number = 4
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

