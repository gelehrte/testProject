let currentTempC = 16; // 現在の温度。単位は摂氏 
console.log(currentTempC); // 16 (←出力結果) 
currentTempC = 22.5; 
console.log(currentTempC); // 22.5
let targetTempC, room1 = "会議室A", room2 = "ロビー";
console.log(room1);
console.log(room2);
console.log("定数宣言：const ROOM_TEMP_C = 26.5, MAX_TEMP_C = 36;")
const ROOM_TEMP_C = 26.5, MAX_TEMP_C = 36;
console.log(ROOM_TEMP_C);
console.log("example/ch03/ex03-06-2/main.js");
let count = 10; /* 整数リテラル、countも倍精度小数の形式で記憶される */ 
console.log(count); // 10
const blue = 0x0000ff; /* 16進数 (16進数のff = 10進数の255) */ 
console.log(blue); // 255
const umask = 0o0022; /* 8進数 (8進数の22 = 10進数の18) */ 
console.log(umask); // 18
const roomTemp = 21.5; /* 小数 */
console.log(roomTemp); // 21.5
const c = 3.0e6; /* 指数表記 (3.0×(10の6乗) = 3,000,000) */
console.log(c); // 3000000
const e = -1.6e-19; /* 指数表記 (-1.6×(10の-19乗) = 0.00000000000000000016) */ 
console.log(e); // -1.6e-19
const inf = Infinity;
console.log(inf); // Infinity
const ninf = -Infinity;
console.log(ninf); // -Infinity
const nan = NaN; /*「Not A Number」の意 */
console.log(nan); // NaN
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log(Infinity/Infinity); // NaN
console.log("テンプレートリテラル");
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const dialog3 = `He \\looked \r\nup and said "don't do that!" to Max.`; 
console.log(dialog3); // He looked up and said "don't do that!" to Max. 
console.log(dialog2===dialog3); // true
//テンプレート
let currentTemp = 19.5;
const message = `現在の温度は${currentTemp}°Cです。`; 
console.log(message); // 現在の温度は19.5°Cです。
console.log("シンボル");
const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED); // Symbol()
console.log(ORANGE); // Symbol(夕日の色)
console.log(RED === BLUE); // false (シンボルはすべてユニーク。=== については 5 章参照) 
console.log(RED === ORANGE); // false (シンボルはすべてユニーク)