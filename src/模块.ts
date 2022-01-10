/*
* 模块在其自身的作用域里执行，定义在模块里面的一切变量、方法、类等等外部作用域都无法访问，除非明确的export
* */
// declare module "*.png"{
//     const value:any;
//     export default value
// }

import * as MyLargeModule from './modules/MyLargeModule'
let dog = new MyLargeModule.Dog()

import {Calculator,test} from "./modules/Calculator";
let c = new Calculator();
test(c, "1+2*33/11=");
