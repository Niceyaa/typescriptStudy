// 基本类型
let isDone: boolean

let isStr: string

let isNumber: number

let isArray: number[] = [1, 2, 3]
let isOtherArray: Array<number> = [12, 2, 34, 5]

// 元组: 表示一个已知元素数量和类型的数据，各元素的类型不必相同
let x: [number, string] = [1, '222']


// 枚举: 就是将所有可能的值全部列出来(不指定值的时候，默认从0开始编号)
// enum Color {Red, Green, Blue}

// 可以手动指定成员的数值，可以根据编号值去查看对应的名字
enum Color {Red=1, Green=2, Blue}
let c: Color = Color.Blue
let b: string = Color[2]
console.log(b)


// 类型断言
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length

