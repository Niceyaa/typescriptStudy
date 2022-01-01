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

    // 可索引类型 可索引的类型，只能为 number或者string
    interface indexType {
        [propName: number]: string  // 表示索引类型为number 返回值类型为string 当索引类型为number的时候，他的返回值类型需要为索引类型为string的类型的子类型
    }
    let myArray: indexType = ['bob', 'alice']
    let strVal: string = myArray[0] //其实当使用0(number)去做索引的时候，js会将其转成‘0’字符串的形式去索引，所以两者需要保持一直（返回值）

    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
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






})()
