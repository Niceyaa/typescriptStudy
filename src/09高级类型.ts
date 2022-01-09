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
    function padLeft(value: string, padding: number | string) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`)
    }

    console.log(padLeft('hello', 2));

    interface Bird {
        fly(): void

        layEggs(): void
    }

    interface Fish {
        swim(): void

        layEggs(): void
    }

    function getSmallPet(): Fish | Bird {
        let fish: Fish = {
            swim() {
                console.log('fish swim')
            },
            layEggs() {
                console.log('')
            }
        }
        let bird: Bird = {
            fly() {
                console.log('bird fly')
            },
            layEggs() {
                console.log('')
            }
        }
        return Math.random() < 0.5 ? fish : bird
    }

    let pet = getSmallPet()
    // pet.layEggs() // ok
    // per.swim() // error 不是两个类型共有的
    // 使用类型断言
    if ((<Fish>pet).swim) {
        (<Fish>pet).swim()
    } else if ((<Bird>pet).fly) {
        (<Bird>pet).fly()
    }

    // 类型保护：就是一些表达式，会在运行时检查以确保在某个作用域里的类型。定义的时候，他的返回值是一个类型谓词
    // pet is Fish 就是一个类型谓词
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined
    }

    // if (isFish(pet)) {
    //     pet.swim()
    // } else {
    //     pet.fly()
    // }

    // typeof 类型保护
    function padLeft2(value: string, padding: number | string) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`)
    }

    console.log(padLeft2('hello', 2));

    // instanceof 类型保护
    interface Padder {
        getPaddingString(): string
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpace: number) {
        }

        getPaddingString(): string {
            return Array(this.numSpace + 1).join(' ')
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) {
        }

        getPaddingString(): string {
            return this.value
        }
    }

    function getRandomPadder() {
        return Math.random() > 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder('    ')
    }

    let padder: Padder = getRandomPadder()
    if (padder instanceof SpaceRepeatingPadder) {
        padder
    }
    if (padder instanceof StringPadder) {
        padder
    }

    // 可选参数和可选属性
    // 可选属性和可选参数他们的类型 === 本身类型 | undefined
    // function f(x: number, y: number | undefined) :number {
    function f(x: number, y?: number): number {
        return x + (y || 0)
    }

    f(2, 2)
    f(2)
    f(2, undefined)
    // f(2,null) // error

    // 类型保护和类型断言
    // 当一个变量的类型可能为 null或者undefined 的时候（let a = string|null）
    // 可以使用 类型断言手动去除 通过在变量后面添加一个 ! 后缀来去除null或者undefined 检测
    function broken(name: string | null): string {
        function postFix(prm: string) {
            return name!.charAt(0) + '. the ' + prm
        }

        name = name || 'Bob'
        return postFix('great')
    }

    // 类型别名：类型别名会给类型起一个名字（代表该类型）。他和接口很像，但是可以作用于原始值，联合类型，元组以及其他任何你需要手写的类型
    type Name = string
    type NameResolver = () => string
    type NameOrResolver = Name | NameResolver

    function getName(n: NameOrResolver): Name {
        if (typeof n === 'string') {
            return n
        } else {
            return n()
        }
    }

    type Container<T> = { value: T }
    let con: Container<string> = {
        value: 'value'
    }
    type Tree<T> = {
        value: T,
        left: Tree<T>,
        right: Tree<T>
    }

    // 接口和类型别名的区别
    // 接口可以被继承和继承别人，但是类型别名不能
    type Alias = { num: number }

    interface Interface {
        num: number
    }

    // declare function aliased(arg:Alias):Alias
    // declare function interfaced(arg:Interface):Interface

    type Easing = "ease-in" | "ease-out" | "ease-in-out";

    class UIElement {
        animate(dx: number, dy: number, easing: Easing) {
            if (easing === 'ease-in') {
            } else if (easing === "ease-out") {
            } else if (easing === "ease-in-out") {
            } else {

            }
        }
    }

    let btn = new UIElement()
    btn.animate(0, 0, 'ease-in')
    btn.animate(0, 0, 'ease-out')
    // btn.animate(0,0,'ease') // error

    // 单例类型一般指的是 枚举成员类型、数字和字符串字面量类型

    // 可辨识联合
    interface Square {
        kind: "square";
        size: number;
    }

    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface Circle {
        kind: "circle";
        radius: number;
    }

    interface Triangle {
        kind: "triangle";
        radius: number;
    }

    type Shape = Square | Rectangle | Circle | Triangle

    function assertNever(x: Shape): never {
        throw new Error("Unexpected object: " + x.kind);
    }

    // function area(s: Shape) {
    function area(s: Shape): number {
        switch (s.kind) {
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
            case "circle":
                return Math.PI * s.radius ** 2;
            default:
                return assertNever(s) // 当有未判断类型的 Triangle传入的时候，可以得到一个错误提示用户进行代码完善
        }
    }

    let square: Square = {
        size: 10,
        kind: 'square'
    }
    let circle: Circle = {
        radius: 10,
        kind: 'circle'
    }
    let rectangle: Rectangle = {
        width: 10,
        height: 10,
        kind: 'rectangle'
    }
    let triangle: Triangle = {
        radius: 10,
        kind: 'triangle'
    }
    console.log('square', area(square))
    console.log('circle', area(circle))
    console.log('rectangle', area(rectangle))
    // console.log('triangle', area(triangle))

    // 多态的this类型
    class BasicCalculator {
        public constructor(protected value: number = 0) {
        }

        public currentValue(): number {
            return this.value
        }

        public add(operand: number): this {
            this.value += operand;
            return this;
        }

        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
    }

    let v = new BasicCalculator(2).multiply(2).add(2).currentValue()

    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }

        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }

        // ... other operations go here ...
    }
    /*
    * 如果没有this类型，ScientificCalculator就不能够在继承BasicCalculator的同时还保持接口的连贯性。 multiply将会返回BasicCalculator，它并没有sin方法。 然而，使用this类型，multiply会返回this，在这里就是ScientificCalculator。
    * */

    // 索引类型
    // function pluck(o,names){
    //     return names.map(n=>o[n])
    // }
    function pluck<T,K extends keyof T>(o:T,names:K[]):T[K][]{
        return names.map(n => o[n])
    }

    interface Person{
        name:string,
        age:number
    }
    let person:Person = {
        name:'Jarid',
        age:35
    }
    let strings:any[] = pluck(person,['name','age'])
    console.log('strings',strings)


})()

