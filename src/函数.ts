console.log('函数----');

// 完整函数类型形式
/*
* myAdd:(x:number,y:number)=>number
*   表示myAdd是一个接收两个number类型参数的函数，且函数返回类型为number
* */
let myAdd: (x: number, y: number) => number

myAdd = function (x: number, y: number): number {
    return x + y
}

// 函数可选参数
let myFn = (name: string, ...prms: string[]) => {
    return name + prms.join('-')
}
let res = myFn('1')
console.log(res);


// this
/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return ()=> {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();*/

interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[],
    cards: number[],

    createCardPicker(this: Deck): () => Card // 定义一个函数，参数类型为Deck，返回一个（）=》Card 函数
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }

    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// 当this作为回调参数
interface UIElement {
    addClickListener(fn: (this: void, e: Event) => void): void
}

class UIEl implements UIElement {
    addClickListener(fn: (this: void, e: Event) => void): void {
        console.log('绑定成功')
    }
}

class Handler {
    info: string = 'success'
    onClickBad = (e: Event) => {
        this.info = e.type
    }
}

let h = new Handler()
let uiEl = new UIEl()
uiEl.addClickListener(h.onClickBad)
