const sam1 = {
  name: 'Sam',
  age: 4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 }; /* 1行で宣言 */
console.log(sam2);

console.log(sam1.name===sam2.name); // true
console.log(sam1.age===sam2.age); // true
console.log(sam1===sam2); // false

const sam3 = {
  name: 'Sam',
  classification: { /* プロパティの値がオブジェクト */
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};
console.log(sam3);
/* 上の行の出力
{ name: 'Sam',
  classification: 
   { kingdom: 'Animalia',
     phylum: 'Chordata',
     class: 'Mamalia',
     order: 'Carnivoria',
     family: 'Felidae',
     subfaimily: 'Felinae',
     genus: 'Felis',
     species: 'F. catus' } }
*/

const タマ = {
  名前: 'タマ',
  分類: {  // プロパティの値がオブジェクト
    界: '動物界',
    門: '脊索動物門',
    綱: '哺乳綱',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};
console.log(タマ);
/* 上の行の出力
{ '名前': 'タマ',
  '分類': 
   { '界': '動物界',
     '門': '脊索動物門',
     '綱': '哺乳綱',
     '目': 'ネコ目',
     '科': 'ネコ科',
     '亜科': 'ネコ亜科',
     '属': 'ネコ属',
     '種': 'ネコ' } }
*/
console.log(sam3.classification.family); // Felinae 
console.log(sam3["classification"].family); // Felinae 
console.log(sam3.classification["family"]); // Felinae 
console.log(sam3["classification"]["family"]); // Felinae
console.log(タマ.分類.科); // ネコ科 
console.log(タマ["分類"].科); // ネコ科 
console.log(タマ.分類["科"]); // ネコ科 
console.log(タマ["分類"]["科"]); // ネコ科
console.log(タマ.名前);
sam3.speak = function() { return "Meow!"; }; 
タマ.鳴く = function() { return "ニャーゴ"; };
console.log(sam3.speak()); // Meow! 
console.log(タマ.鳴く()); // ニャーゴ
delete sam3.classification; // classificationツリー全体を削除 
delete sam3.speak; // speak関数を削除
console.log(sam3); // { name: 'Sam' }
delete タマ.分類;
delete タマ.鳴く;
console.log(タマ); // { '名前': 'タマ' }
const s = "hello";
const s2 = s.toUpperCase(); // 大文字に変換した文字列をs2に代入 
console.log(s2); // HELLO
console.log("配列");
const a1 = [1, 2, 3, 4]; // 4つの数値を含む配列
const a2 = [1, 'two', 3, null]; // 型が混在している配列 
const a3 = [ // 文字列の配列
"What the hammer? What the chain?", "In what furnace was thy brain?", "What the anvil? What dread grasp", "Dare its deadly terrors clasp?",
];
const a4 = [ // 3つのオブジェクトを含む配列
{ name: "Ruby", hardness: 9 },
{ name: "Diamond", hardness: 10 }, { name: "Topaz", hardness: 8 },
];
const b4 = [ // 同じく3つのオブジェクトの配列。日本語のプロパティ
{ 名前: "ルビー", 硬度: 9 },
{ 名前: "ダイヤ", 硬度: 10 }, { 名前: "トパーズ", 硬度: 8 },
];
const a5 = [ // 配列を要素とする配列
[1, 3, 5],
[2, 4, 6], ];

const halloween = new Date(2016, 9, 31); // 月は0から始まる。9は10月を表す 
console.log(halloween); // 2016-10-30T15:00:00.000Z(処理系により異なる) // 時刻は現地時間の午前0:00(協定世界時で前日の15:00)
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm 
console.log(halloweenParty); // 2016-10-31T10:00:00.000Z
console.log(halloweenParty.getFullYear()); // 2016 
console.log(halloweenParty.getMonth()); // 9 
console.log(halloweenParty.getDate()); // 31 
console.log(halloweenParty.getDay()); // 1(月曜。0=日曜、1=月曜、...) 
console.log(halloweenParty.getHours()); // 19 
console.log(halloweenParty.getMinutes()); // 0 
console.log(halloweenParty.getSeconds()); // 0 
console.log(halloweenParty.getMilliseconds()); // 0

// メールアドレスにマッチするパターン(単純化したもの)
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
// 米国の電話番号にマッチするパターン
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

const numStr = "33.3";
const num = Number(numStr);
// Numberオブジェクトのインスタンスではなく、「数値」を生成

const a = parseInt("16 volts", 10); //"volts"は無視。16は10進数として解釈される
console.log(a); // 16
const b = parseInt("3a", 16); // 3aは16進数として解釈
console.log(b); // 58
const c = parseFloat("15.5 kph"); //" kph"は無視。parseFloatは常に10進数として解釈 
console.log(c); // 15.5
const d = parseFloat("15.5kph"); //" kph"は無視。parseFloatは常に10進数として解釈 
console.log(d); // 15.5
console.log(Math.floor(Math.random()));
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 }; 
for(let prop in player) {
if(!player.hasOwnProperty(prop)) continue; // このあとの説明を参照
console.log(prop + ': ' + player[prop]); }

'use strict';
// m以上n以下のランダムな整数を返す
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}

// 「サイコロ」の目を表す文字列をランダムに返す
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
  [rand(0, 5)];
}

const hand = [randFace(), randFace(), randFace()]; 
for(let face of hand)
    console.log(` サイコロの目 ...${face}!`);
