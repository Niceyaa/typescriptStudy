(() => {
    console.log('类型推论--类型兼容性')

    let x = [1, 2, 3, null] // type [...number[],null] 或者 (number|null)[]

    window.onmousedown = function (mouseEvent: any) {
        console.log(mouseEvent.button)
    }

    // 类型兼容性
    // typescript 中的类型兼容性是基于结构子类型的
    // 结构类型是一种只使用其成员来描述类型的方式
    interface Named {
        name: string
    }

    class Person {
        name: string = 'zs'
        age: number = 12
    }

    let p: Named
    p = new Person()

    // 结构化类型系统的基本规则，如果 x 要兼容 y ，那么 y 至少具有与 x 相同的属性
    interface Inter {
        name: string
    }

    let x2: Inter
    let y = {
        name: 'Alice',
        location: 'Seattle'
    }
    x2 = y

    // 函数参数也是一样的规则
    function greet(n: Inter): void {
        console.log(n.name)
    }

    greet(y)

    // 比较函数
    let fn = (a: number) => 0
    let fn2 = (a: number, b: number) => 0
    fn2 = fn // ok
    // fn = fn2 // error

    // 返回值类型
    let x3 = () => ({name: 'Alice'})
    let y3 = () => ({name: "Alice", age: 12})
    x3 = y3 // ok
    // y3 = x3 error

})()
