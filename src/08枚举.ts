(function () {
    // 数字枚举 第一个值默认为 0，后面的递增
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }

    function logDirection(dir: Direction): void {
        console.log('direction', dir)
    }

    logDirection(Direction.Down)

    /*
    * 常量枚举表达式：
    *   一个枚举表达式字面量（主要是字符串字面量或数字字面量）
    *   一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
    *   带括号的常量枚举表达式
    *   一元运算符 +, -, ~其中之一应用在了常量枚举表达式
    *   常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
    * */

    //常量枚举表达式
    enum FileAccess {
        None,
        Read = 1 << 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,
        G = '123'.length
    }

    console.log('-------------')
    console.log(FileAccess.None)
    console.log(FileAccess.Read)
    console.log(FileAccess.Write)
    console.log(FileAccess.ReadWrite)
    console.log(FileAccess.G)


    /*
    * 字面量枚举成员
    *   1.不带有初始值的常量枚举
    *   2.任意数字字面量
    *   3.使用了一元 - 符号的数字字面量（-1，-100）
    * */

    /*
    * 当所有枚举成员都拥有字面量常量时，它就会带有一些特殊意义：
    *   1.枚举成员成为了类型
    *   2.枚举类型本身变成了每个枚举成员的 联合
    * */
    enum ShapeKind {
        Circle,
        Square
    }

    interface Circle {
        kind: ShapeKind.Circle
        radius: number
    }

    interface Square {
        kind: ShapeKind.Square
        radius: number
    }

    let dee: Circle = {
        // kind:ShapeKind.Square,// error 接口Circle中指定了kind的类型为ShapeKind.Circle
        // kind:1, // ok
        kind: ShapeKind.Circle,
        radius: 100
    }

    // 枚举类型本身变成了每个枚举成员的 联合
    enum E {
        Foo,
        Bar
    }

    function f(x: E): void {
        console.log('x', x)
    }

    // 运行时的枚举 -- 枚举在运行的过程中是一个真正存在的对象
    enum E2 {
        X, Y, Z
    }

    function f2(obj: { X: number }): number {
        console.log('obj.X', obj.X)
        return obj.X
    }

    f2(E2)

    // 反向映射 -- 数字枚举成员具有反向映射，从枚举值到枚举名字，该特性只有数字枚举成员具有
    /*
    * 枚举中包含了
    * {
    *   A: 0,
    *   0: 'A'
    * }
    *
    * */

    // 数字枚举
    enum E3 {
        A = 1,
        B = '2' // 不具备反向映射
    }

    let a: E3 = E3.A
    let nameOfA = E3[a]
    console.log('反向映射', E3, a, nameOfA)

    // const 枚举 （常量枚举）：常量枚举只能使用常量枚举表达式进行初始化，并且不同于常规的枚举，他们在编一阶段会被删除，常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
    const enum E4 {
        A = 1,
        B = A * 2
    }

    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

    // 外部枚举 外部枚举用来描述已经存在的枚举类型的形状。
   /* declare enum E7{
        A = 1,
        B,
        C = 2
    }*/

})()

