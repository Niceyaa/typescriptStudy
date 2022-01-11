export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
}

declare global{
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}
