(function(){

    // 描述一个对象的类型
    type myType = {
        name:string,
        age:number,
        // [propname:string]:any
    }

    /*
    * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *   也可以当成类型声明去使用
    * */

    interface myInterface{
        name: string,
        age:number
    }

    interface myInterface{
        gender: string,
    }

    const obj: myInterface = {
        name:"zs",
        age:11,
        gender: '1'
    }

    /*
    *   接口可以在定义类的时候，去限制类的结构
    *       接口中的所有属性都不能有初始值，实际值
    *       接口只定义对象的结构，不考虑实际的值
    *           在接口中定义的方法都是抽象方法
    * */

    interface myInter{
        gender: string,
        sayHello():void
    }

    // 定义类时，可以使类去实现一个接口，实现接口就是使类去满足接口的要求

    class MyClass implements myInter{
        gender: string;

        constructor(gender:string){
            this.gender = gender
        }

        sayHello(): void {
            console.log("hello")
        }



    }



})()
