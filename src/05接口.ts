(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number,
        // [propname:string]:any
    }

    /*
    * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *   也可以当成类型声明去使用
    * */

    interface myInterface {
        name: string,
        age: number
    }

    interface myInterface {
        gender: string,
    }

    const obj: myInterface = {
        name: "zs",
        age: 11,
        gender: '1'
    }

    /*
    *   接口可以在定义类的时候，去限制类的结构
    *       接口中的所有属性都不能有初始值，实际值
    *       接口只定义对象的结构，不考虑实际的值
    *           在接口中定义的方法都是抽象方法
    * */

    interface myInter {
        gender: string,

        sayHello(): void
        sayHello(): void
    }

    // 定义类时，可以使类去实现一个接口，实现接口就是使类去满足接口的要求

    class MyClass implements myInter {
        gender: string;

        constructor(gender: string) {
            this.gender = gender
        }

        sayHello(): void {
            console.log("hello")
        }
    }

    // 使用对象
    // function printLabel(labelObj:{label:string}){
    //     console.log(labelObj.label)
    // }

    // 使用接口
    interface myLabel {
        label: string,
        size?: number
    }

    function printLabel(labelObj: myLabel) {
        console.log(labelObj.label)
    }
    }

    // 可索引类型 可索引的类型，只能为 number或者string
    interface indexType {
        [propName: number]: string  // 表示索引类型为number 返回值类型为string 当索引类型为number的时候，他的返回值类型需要为索引类型为string的类型的子类型
    }
    let myArray: indexType = ['bob', 'alice']
    let strVal: string = myArray[0] //其实当使用0(number)去做索引的时候，js会将其转成‘0’字符串的形式去索引，所以两者需要保持一直（返回值）

    let myObj = {
        size: 10,
        label: '该对象包含属性label和size'
    }
    printLabel(myObj)
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }

    interface Point {
        readonly x: number, //只读属性
        y: number
    }
    class Dog extends Animal {
        breed: string
        constructor(breed: string, name: string) {
            super(name)
            this.breed = breed
        }
    }

    interface indexType1 {
        [x: number]: Dog
        [y: string]: Animal
    }

    interface numberDictionary {
        [index: string]: string
        name: 'zs',
        // age:12 //error 类型需要为string
    }

    let p: Point = {
        x: 1,
        y: 2
    // 实现接口--类 用来规范类中的一些公共属性和方法，实现的时候，接口中的方法和属性都需要被实现，而且不同控制静态属性
    interface DateInter {
        currentDate: Date
        setTime(d: Date): void
    }
    class myClass implements DateInter {
        currentDate: Date;
        a:string = '1'
        constructor(currentDate: Date) {
            this.currentDate = currentDate
        }
        setTime(d: Date): void {
            this.currentDate = d
        }
    }
    // p.x = 3 // error
    p.y = 4

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
    let a:Array<number> = [1,2,3,4,5]
    let ro:ReadonlyArray<number> = a
    // ro[0] = 1 // error
    // a = ro // error  只读数组不能直接赋值给普通数组，但是可以通过类型断言
    // a = ro as number[]
    a = <Array<number>>ro

    // 作为函数类型 当接口作为函数类型时，ts会对对应位置上的参数类型进行检查，参数名称可以不一样，定义函数的时候，可以不用指定类型，ts会根据接口自动推断出来
    interface SearchFn{
        (source:string,substring:string):boolean
    }
    let mySearch:SearchFn
    mySearch = function(source1,substring1){
        let result = source1.search(substring1)
        return result >-1
    }
    mySearch('1','2')

})()
