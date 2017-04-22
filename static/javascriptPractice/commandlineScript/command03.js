const n = 5;
const s = "5";
console.log(n === s); // false   （データ型が異なる）
console.log(n !== s); // true
console.log(n === Number(s)); // true   （文字列の"5"が数値の5に変換される）
console.log(n !== Number(s)); // false
console.log(n == s); // true    （非推奨）
console.log(n != s); // false   （非推奨）

const a = { name: "あるオブジェクト" };
const b = { name: "あるオブジェクト" };
console.log(a === b); // false   （別のオブジェクトを指している）
console.log(a !== b); // true
console.log(a == b); // false    （非推奨）
console.log(a != b); // true     （非推奨）

console.log(Number.EPSILON);

let x = 0; while(true) {
x += 0.1;
console.log(x);
if(Math.abs(x - 0.3) < Number.EPSILON) break;
}
console.log(`${x} で停止。`);

if(23) console.log("t"); else console.log("f");

const skipIt = true;
let xy = 0;
const result = skipIt || xy++;
console.log(xy);

const doIt1 = true;
const result1 = doIt1 ? "Did it!" : "Didn't do it."; 
console.log(result1); // Didn't do it.


let x2 = 0, y2 = 10, z2; 
z2 = (x2++, ++y2); //x2++ なので後評価
console.log(x2);
console.log(y2);
console.log(z2); // 10
x2 = 0, y2 = 10
z2 = x2++, y2++; 
console.log(z2); // 0
