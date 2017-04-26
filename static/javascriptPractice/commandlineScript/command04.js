const obj = { b: 2, c: 3, d: 4 }; let a, b, c;
({a, b, c} = obj); // 括弧で囲む必要がある 
console.log(a);
console.log(b);
console.log(c);
const arr = [1, 2, 3]; 
let [x, y] = arr; 
console.log(x); // 1 
console.log(y); // 2

const arr2 = [1, 2, 3, 4, 5];
let [x1, y1, ...rest] = arr2; 
console.log(x1); // 1 
console.log(y1); // 2 
console.log(rest); // [ 3, 4, 5 ]

const roomTempC = 26.5;
let currentTempC = 34.5; 
console.log(`室温と気温の差:${currentTempC-roomTempC}°C `);
function sayHello() { // 関数の本体は「{」で始まる 
    console.log("Hello world!"); 
    console.log("こんにちは、世界! "); 
    console.log("¡Hola mundo!"); 
    console.log("Hallo wereld!"); 
    console.log("Привет мир!");
}
//「}」で終わる
sayHello();
const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; }, 
}
const speak = o.speak;
console.log(speak === o.speak); // true (どちらの定数も同じ関数を参照している) 
console.log(speak()); // "My name is undefined!"(undefinedが表示されない場合あり) 
console.log(o.speak()); // "My name is Wallace!"
console.log("test".length);
const o2 = {
    name: 'Julie', 
    greetBackwards: function() {
        const self = this; // thisを覚えておく
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i]; 
            }
            return nameBackwards;
        } // getReverseName の定義終わり
        return `${getReverseName()} si eman ym ,olleH`; 
    },
}; 
console.log(o2.greetBackwards());

const o3 = {
    name: 'Julie', 
    greetBackwards: function() {
        let nameBackwards = '';
        for(let i=this.name.length-1; i>=0; i--) {
            nameBackwards += this.name[i]; 
        }
        return `${nameBackwards} si eman ym ,olleH`; 
    },
}; 
console.log(o3.greetBackwards());
const f2 = name => `Hello, ${name}!`;
console.log(f2("test"));

const o4 = {
  name: 'Julie',
  greetBackwards: function() { /* オブジェクトoのプロパティgreetBackwards */
    const getReverseName = () => {  /* アロー関数 */
      console.log(this); // { name: 'Julie', greetBackwards: [Function: greetBackwards] }
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }; /* ここまでアロー関数の定義 */

    return `${getReverseName()} si eman ym ,olleH`;
  }, /* オブジェクトoのプロパティgreetBackwardsの値の関数の定義の終わり */
}; /* オブジェクトoの定義の終わり */

console.log(o4.greetBackwards()); // eiluJ si eman ym ,olleH
const arr3 = [2, 3, -5, 15, 7]; 
console.log(Math.min(...arr3)); // -5 
console.log(Math.max.apply(null, arr3)); // 15

const message = (function() {
const secret = "私は秘密です! ";
return `秘密の長さは${secret.length}文字です。`;
})();
console.log(message); // 秘密の長さは7文字です。

const f = (function() { let count = 0;
return function() {
return `この関数が呼ばれた回数:${++count}回。`; }
})();
console.log(f()); // この関数が呼ばれた回数:1回。 
console.log(f()); // この関数が呼ばれた回数:2回。 
console.log(f()); // この関数が呼ばれた回数:3回。

let arr0 = [1, 5, 7];
let arr20 = arr0.splice(1, 0, 2, 3, 4); // arr[1]から2, 3, 4が追加される 
console.log(arr0); // [ 1, 2, 3, 4, 5, 7 ]
console.log(arr20); // [] ←何も削除されていない
arr20 = arr0.splice(5, 0, 6); // arr[5]に6が追加されて、以降ひとつずつ後ろへ 
console.log(arr0); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr20); // [] ←何も削除されていない
arr20 = arr0.splice(1, 2) // arr[1]から2個削除
console.log(arr0); // [ 1, 4, 5, 6, 7 ]
console.log(arr20); // [ 2, 3 ] ←削除された要素
arr20 = arr0.splice(2, 1, 'a', 'b'); // arr[2]から1個削除して'a'と'b'をそこに追加 
console.log(arr0); // [ 1, 4, 'a', 'b', 6, 7 ]
console.log(arr20); // [ 5 ] ←削除された要素
arr20 = arr0.splice(1, 0, ...[9,8,7]); // arr[5]に6が追加されて、以降ひとつずつ後ろへ 
console.log(arr0); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr20); // [] ←何も削除されていない