import { Observable } from "./observable";
declare module './Observable' {
    interface Observable<T> {
        map<U>(f:(x:T)=>U):Observable<U>
    }
}
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }
