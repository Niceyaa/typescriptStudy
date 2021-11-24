(function () {

    /*
    * abstract 关键字来定义 抽象类
    *   抽象类就是专门用来的被继承的类，和其他类的区别在于他不能用来直接创建对象
    *
    * */

    //定义动物类
    abstract class Animal {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.age = age
            this.name = name
        }

        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对其重写

        abstract sayHello(): void
    }


    //定义狗类
    class Dog extends Animal {

        sayHello() {
            console.log('汪汪汪')
        }
    }

    // 定义猫类
    class Cat extends Animal {
        sayHello() {
        }
    }


    const dog = new Dog('xiaohei', 1,)
    dog.sayHello()

    // let snake = new Animal('蛇',11) 报错

})()
