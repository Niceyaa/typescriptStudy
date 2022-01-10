// symbol 成为了一种新的原生类型，就像number和string一样
// symbol 类型的值通过 Symbol 构造函数进行构建
// symbol 是不可改变且唯一的
// symbol 作为对象属性的时候，不能够通过for in获取(受保护)


/*
    除了用户定义的symbols，还有一些已经众所周知的内置symbols。 内置symbols用来表示语言内部的行为。

    以下为这些symbols的列表：

    Symbol.hasInstance
    方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

    Symbol.isConcatSpreadable
    布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

    Symbol.iterator
    方法，被for-of语句调用。返回对象的默认迭代器。

    Symbol.match
    方法，被String.prototype.match调用。正则表达式用来匹配字符串。

    Symbol.replace
    方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

    Symbol.search
    方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

    Symbol.species
    函数值，为一个构造函数。用来创建派生对象。

    Symbol.split
    方法，被String.prototype.split调用。正则表达式来用分割字符串。

    Symbol.toPrimitive
    方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

    Symbol.toStringTag
    方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

    Symbol.unscopables
    对象，它自己拥有的属性会被with作用域排除在外。
*/

let sym = Symbol()
let sym2 = Symbol('key')
let sym3 = Symbol('key')
console.log(sym2 === sym3) // false

// 像字符串一样，symbols也可以被用做对象属性的键。
let obj = {
    [sym]: 'value'
}
console.log(obj[sym])

let height = Symbol()
let person = {
    name: 'zs',
    age: 12,
    gender: ['basketball', 'swimming', 'game'],
    [height]: 180
}
console.log('person-height', person[height])
console.log('person', person)
for (let k in person) {
    console.log(`person.${k}`)
}

let list = [4,5,6]
let pets = new Set(['cat','dog','hamster'])
console.log('pets',pets)
for (let pet in pets) {
    console.log('pet',pet) // 没有输出
}
for (let pet of pets) {
    console.log('pet',pet) // 'cat','dog','hamster']
}


