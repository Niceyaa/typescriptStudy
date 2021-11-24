(function () {

    class Person {
        // 定义属性的时候，可以添加属性修饰符

        /*
        *  public 修饰的属性可以在任意位置访问（修改），默认值
        *  private 修饰的属性，只能在类内部进行访问（修改）
        *  protected 修饰的属性，和private差不多，protected修饰的属性，但在子类内部是可以访问的
        *  static 定义静态属性，只能通过类名去访问
        * */

        private _name: string
        protected gender: string
        static hobby: string = '摸鱼'
        _age: number


        get name(): string {
            return this._name
        }

        set name(value: string) {
            console.log("我执行了吗--name")
            this._name = value
        }

        constructor(name: string, age: number, gender: string) {
            this._name = name
            this._age = age
            this.gender = gender
        }

    }

    class BlackPerson extends Person {
        test() {
            console.log(this.gender)
        }
    }


    /*class C {
        public name:string
        public age:number

        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
    }*/

    // 简写
    class C{
        constructor(public name:string,public age:number){}
    }
    const per = new Person('zs', 12, 'female')
    const blackPer = new Person('ls', 121, 'male')
    const c = new C('ls', 121)
    console.log(per);
    console.log(blackPer);

    console.log(per.name);
    console.log(Person.hobby);
    console.log(BlackPerson.hobby);
    console.log(C)


})()
