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
function fn2<T,K>(a:T,b:K):T{
    return a
}

interface myInter {
    length: number
}

function fn3<T extends myInter>(a:T):number{
    return a.length
}

class MyClass<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}

