// 声明合并：指的是编译器将针对同一个名字的两个独立声明合并为单一声明。
// 合并后的声明同时具有原先两个声明的特性。任何数量的声明都是可以被合并的(两个或多个)
// 目前，类不能与其它类或变量合并

//合并接口

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

// 合并后的 Box 具有 height，width，scale 三个属性
let box: Box = {
    height: 5, width: 6, scale: 10
}

// interface Cloner{
//     clone(animal:Animal):Animal
// }
// interface Cloner {
//     clone(animal: Sheep): Sheep;
// }
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
// }

// 每组接口里面的声明顺序保持不变，但各组接口之间的顺序是后来的接口重载出现在靠前的位置
// 这个规则有一个例外是当出现特殊的函数签名时。 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。
// 合并后的 Cloner
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Animal): Animal;
// }

interface Document {
    createElement(tagName: any): Element;
}

interface Document {
    createElement(tagName: "div"): HTMLDivElement;

    createElement(tagName: "span"): HTMLSpanElement;
}

interface Document {
    createElement(tagName: string): HTMLElement;

    createElement(tagName: "canvas"): HTMLCanvasElement;
}

// 合并后的 顺序
// interface Document{
//     createElement(tagName:'canvas'):HTMLCanvasElement
//     createElement(tagName: "div"): HTMLDivElement;
//     createElement(tagName: "span"): HTMLSpanElement;
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: any): Element;
// }

// 命名空间
namespace Animals {
    export class Zebra1 {
    }
}

namespace Animals {
    export interface Legged {
        numberOfLegs: number;
    }

    export class Dog1 {
    }
}

// 合并后的
// namespace Animals {
//     export interface Legged {
//         numberOfLegs: number;
//     }
//
//     export class Dog1 {}
//     export class Zebra1 {}
// }

// 合并后的 非导出成员 不能互相访问，只能在原有的 namespace 里面可以访问
namespace Animal1 {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}
// namespace Animal1 {
//     export function doAnimalsHaveMuscles() {
//         return haveMuscles;  // Error, because haveMuscles is not accessible here
//     }
// }

// 合并命名空间和类
class Album{
    label:Album.AlbumLabel1 = new Album.AlbumLabel1()
}
namespace Album {
    export class AlbumLabel1 { }
}

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

// 模块扩展
// observable.js
/*
export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
}

// map.ts
import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}

// consumer.ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map(x => x.toFixed());
*/

import {Observable} from "./modules/Observable";
let arr:Array<number> = []
arr.toObservable()
