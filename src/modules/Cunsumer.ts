import {Observable} from "./Observable";
import './Map'
let ob1: Observable<number> = new Observable<number>()
ob1.map(x=>x.toFixed())
