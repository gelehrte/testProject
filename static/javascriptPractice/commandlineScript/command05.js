{
let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2); // arr[1]の位置から置き換える。arr[2]から最後までコピーする 
console.log(arr); // [ 11, 13, 14, 14 ]
console.log(arr2); // [ 11, 13, 14, 14 ] ← copyWithinはオブジェクト自身を返す 
console.log(arr.copyWithin(2, 0, 2)); // [ 11, 13, 11, 13 ]
// ↑ arr[2]の位置から置き換える。arr[0]からarr[2]の前までコピーする 
console.log(arr.copyWithin(0, -3, -1)); // [ 13, 11, 11, 13 ]
// ↑ arr[0]の位置から置き換える。最後から3番目の要素から最後の要素のひとつ前まで
// (つまり arr[1] から arr[2] まで)コピーする
console.log(arr2); // [ 13, 11, 11, 13 ]
// ↑ arrを変更すると同じ配列を指しているarr2も変わる
}
{
    let arr = new Array(5).fill(1); // 大きさ5の配列を作り全体を1で初期化する 
    console.log(arr); // [ 1, 1, 1, 1, 1 ]
    let arr2 = arr.fill("a"); // すべての要素に "a" を代入する 
    console.log(arr); // [ 'a', 'a', 'a', 'a', 'a' ]
    console.log(arr2); // [ 'a', 'a', 'a', 'a', 'a' ] ← fillはオブジェクト自身を返す 
    console.log(arr.fill("b", 1)); // [ 'a', 'b', 'b', 'b', 'b' ]
    // ↑ arr[1]から最後まで "b" を代入する
    console.log(arr.fill("c", 2, 4)); // [ 'a', 'b', 'c', 'c', 'b' ]
    // ↑ arr[2]からarr[4]の前まで(つまりarr[3]まで)"c" を代入する 
    console.log(arr.fill(5.5, -4)); // [ 'a', 5.5, 5.5, 5.5, 5.5 ]
    // ↑ 最後から4番目の要素(つまりarr[1])から最後まで 5.5 を代入する 
    console.log(arr.fill(0, -3, -1)); // [ 'a', 5.5, 0, 0, 5.5 ]
    // ↑ 最後から3番目の要素(つまりarr[2])から最後の要素のひとつ前(つまりarr[3])まで0を代入
}
{
    const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }]; 
    console.log(arr.find(o => o.id === 7)); // { id: 5, name: '太郎' } 
    console.log(arr.find(o => o.id === 2)); // undefined
    console.log(arr.find(o => o.name === "太郎")); 
}
{
    const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
    console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); // 4 /* 添字(第2引数)が2より大きくて、ルートを取った値が整数になる */
    console.log(arr.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x)))); // 49
}
{
    class Person { 
        constructor(name) {
        this.name = name;
        this.id = Person.nextId++; }
    }
    Person.nextId = 0;
    const 一郎 = new Person("一郎"), /* id 0 */
            次郎 = new Person("次郎"), /* id 1 */ 
            三郎 = new Person("三郎"), /* id 2 */ 
            四郎 = new Person("四郎"); /* id 3 */
    const arr = [一郎, 次郎, 三郎, 四郎];
    console.log(arr.find(p => p.id === 三郎.id)); // Person { name: '三郎', id: 2 } /* 2. thisを利用。thisを定数「三郎」に指定 */
    console.log(arr.find(function(p) {return p.id === this.id}, 三郎));
    // Person { name: '三郎', id: 2 } /* アロー関数ではthisは「語彙的に(lexically)」に束縛される(6章参照)*/ 
    console.log(arr.find(p => p.id === this.id, 三郎)); // undefined
}
console.log("Map");
{
    const cart = [ { 名前: "iPhone", 価格: 54800}, { 名前: "Android", 価格: 49800}]; 
    const names = cart.map(x => x.名前); // 各オブジェクトの「名前」からなる配列を新たに作る 
    console.log(names); // [ 'iPhone', 'Android' ]
    const alls = cart.map(x => ({ 名前: x.名前, 価格: x.価格*0.5}));
    console.log(alls);
    const prices = cart.map(x => x.価格);
    console.log(prices); // [ 54800, 49800 ]
    const discountPrices = prices.map(x => x*0.8); // 2割引の価格 
    console.log(discountPrices); // [ 43840, 39840 ]
    const lcNames = names.map(x => x.toLowerCase()); // 小文字にする // 
    //const lcNames = names.map(String.toLowerCase);
    // ↑Firefoxではこれでも動くが、nodeやGoogle Chromeでは動作しない 
    console.log(lcNames); // [ 'iphone', 'android' ]
    const cart2 = names.map((x, i) => ({ 名前: x, 価格: discountPrices[i]}));
    console.log(cart2);
}
console.log("filter");
{
    const カードの束 = [];
    for(let マーク of ['ハート', 'クローバー', 'ダイア', 'スペード']) // 全カードを生成
        for(let 数字=1; 数字<=13; 数字++) 
            カードの束.push({ マーク, 数字});
    let 選択されたカード = カードの束.filter(カード => カード.数字 > 10); 
    console.log(カードの束);
    console.log(選択されたカード); // 2のカードのみ。次の4枚
    /* [ { 'マーク': 'ハート', '数字': 2 },
        { 'マーク': 'クローバー', '数字': 2 },
        { 'マーク': 'ダイア', '数字': 2 },
        { 'マーク': 'スペード', '数字': 2 } ] */
    let arr = ['Aハート', 'Bクローバー', 'Aダイア', 'Aスペード'].filter(x => x[0] === "A");
    console.log(arr);
}
console.log("reduce");
{
    const arr = [5, 7, 2, 4];
    const sum = arr.reduce((a, x) => a += x, 0); 
    console.log(sum); // 18
    const sum2 = arr.reduce((a, x) => a + x, 0); /*「+=」の「=」は省略できる */ 
    console.log(sum2); // 18

}
{
    const words = ["Beachball", "Rodeo", "Angel",
            "Aardvark", "Xylophone", "November", "Chocolate",
            "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    const alphabetical = words.reduce((a, x) => {
    if(!a[x[0]]) //  先頭文字のプロパティがあるかチェック
        a[x[0]] = []; // なければ空で作成
    a[x[0]].push(x); // 現在の要素を記憶
    // console.log(a[x[0]]); // 途中経過を見るにはこれを有効に
    return a; }, {}); // オブジェクトを返す
    console.log(alphabetical);

    /* 実行結果
    { B: [ 'Beachball', 'Bali' ],
    R: [ 'Rodeo' ],
    A: [ 'Angel', 'Aardvark' ],
    X: [ 'Xylophone' ],
    N: [ 'November' ],
    C: [ 'Chocolate', 'Clover' ],
    P: [ 'Papaya' ],
    U: [ 'Uniform' ],
    J: [ 'Joker' ] }
    */

    // 別の例
    const 単語リスト
        = ["ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ",
        "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ",
        "ガラパゴス", "ストリート", "トーマス", "ストレッチ",
        "チベット", "トキ", "キツツキ", "キリン"];
    const 先頭文字で分類したもの = 単語リスト.reduce((a, x) => {
        if(!a[x[0]]) a[x[0]] = [];
        a[x[0]].push(x);
        return a; }, {});
    console.log(先頭文字で分類したもの);
    /* 実行結果
    { 'ビ': [ 'ビーチボール' ],
    'ル': [ 'ルービックキューブ' ],
    'ブ': [ 'ブタペスト' ],
    'ト': [ 'トロッコ', 'トーラス', 'トンガ', 'トーマス', 'トキ' ],
    'コ': [ 'コンゴ' ],
    'ゴ': [ 'ゴースト' ],
    'ス': [ 'スマート', 'ストリート', 'ストレッチ' ],
    'ガ': [ 'ガラパゴス' ],
    'チ': [ 'チベット' ],
    'キ': [ 'キツツキ', 'キリン' ] }
    */
}
{
    const words = ["Beachball", "Rodeo", "Angel",
                    "Aardvark", "Xylophone", "November", "Chocolate",
                    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim(); 
    const longWords2 = words.filter(x => x.length>6).join(" ");
    console.log(longWords); // Beachball Aardvark Xylophone November Chocolate Uniform
    console.log(longWords2);
    const 単語リスト = ["ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ",
                    "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ", "ガラパゴス", "ストリート", "トーマス", "ストレッチ", "チベット", "トキ", "キツツキ", "キリン"];
    const 長い単語 = 単語リスト.reduce((a, w) => w.length>=5 ? a+" "+w : a, "").trim(); 
    console.log( 長い単語 );
}
{
    const SYM = Symbol();
    const o = { a: 1, b: 2, c: 3, [SYM]: 4 }; for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`); }
    /* 実行結果 (キーがシンボルであるプロパティはリストされない)
    a: 1
    b: 2
    c  : 3
    */

}