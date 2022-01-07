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

    // 函数参数双向协变
    enum EventType {
        Mouse,
        Keyboard
    }

    interface Event {
        timestamp: number
    }

    interface MouseEvent extends Event {
        x: number,
        y: number
    }

    interface KeyEvent extends Event {
        keyCode: number
    }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    }

    // listenEvent(EventType.Mouse,(e:MouseEvent)=>console.log(e.x,e.y)) // error
    listenEvent(EventType.Mouse, <(n: Event) => void>((e: MouseEvent) => console.log(e.x, e.y))) // 使用泛型

    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x, (<MouseEvent>e).y))

    // 可选参数和剩余参数
    function invokeLater(args: any[], callback: (...args: any[]) => void): void {
    }

    invokeLater([1, 2], (x, y) => console.log(x, y))
    invokeLater([1, 2], (x?, y?) => console.log(x, y))

    // 枚举类型和数字类型兼容，并且数字类型与枚举类型兼容，不同枚举类型之间的不兼容的
    enum Status {
        Ready, Waiting
    }

    enum Color {
        Red, Blue, Green
    }

    let s = Status.Ready
    // s = Color.Red  // error 属于不同的枚举类型

    /*
    * 类：
    *   比较两个类类型的对象时，只有实例的成员会被比较，静态成员和构造函数不在比较的范围内,
    *   类的私有成员和受保护成员会影响兼容性，当检查类类型的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自 同一个类 的私有成员。
    *   这条规则也适用于受保护成员。这允许子类赋值给父类，但是不能赋值给其他有同样类型的类
    * */
    class Animal {
        feet: number = 4

        constructor(name: string, numFeet: number) {
        }
    }

    class Size {
        feet: number = 4

        constructor(numFeet: number) {
        }
    }

    let animal: Animal = new Animal('lion', 4)
    let size: Size = new Size(4)

    animal = size // ok
    // size = animal // ok

    // 泛型
    interface Empty<T> {

    }

    let x4: Empty<number>
    let y4: Empty<string>

    // y4 = x4  ok

    interface NotEmpty<T>{
        data:T
    }

    let x5:Empty<number>
    let y5:Empty<string>
    // x5 = y5 // error
    
})()
