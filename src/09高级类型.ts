(() => {
    /*
    * for in
    *   对数组使用的时候，返回数组的索引
    *   对对象使用的时候，返回对象的键名
    * for of
    *   对数组使用的时候，返回数组的元素值
    *   不能对对象使用
    * */
    let arr = [{name: '张三'}, {name: '李四'}];
    let obj = {name: 'zs'}
    for (let i in arr) {
        console.log(i) // 0,1
    }
    for (let i in obj) {
        console.log(i) // name
    }
    for (let i of arr) {
        console.log(i) // {name:'张三'},{name:'李四'}
    }

    // 交叉类型 & 表示同时满足多个类型
    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{}
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id] // 使用类型断言
        }
        for (let id in second) {
            if (!(<any>result).hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id]
            }
        }
        return result
    }

    class Person {
        constructor(public name: string) {
        }
    }

    interface Loggable {
        log(): void
    }

    class ConsoleLogger implements Loggable {
        example = 'ConsoleLogger实例'
        log() {
            console.log('ConsoleLogger')
        }
    }

    let jim = extend(new Person('Jim'), new ConsoleLogger())
    // jim.log()  // 无法继承方法
    console.log('交叉类型', jim)

    // 联合类型
    function padLeft(value:string,padding:any){
        if (typeof padding === 'number') {
            return Array(padding+1).join(' ') + value
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`)
    }

})()

