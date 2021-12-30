// 基本类型
var isDone;
var isStr;
var isNumber;
var isArray = [1, 2, 3];
var isOtherArray = [12, 2, 34, 5];
// 元组: 表示一个已知元素数量和类型的数据，各元素的类型不必相同
var x = [1, '222'];
// 枚举: 就是将所有可能的值全部列出来(不指定值的时候，默认从0开始编号)
// enum Color {Red, Green, Blue}
// 可以手动指定成员的数值，可以根据编号值去查看对应的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var b = Color[2];
console.log(b);
