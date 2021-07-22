"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
const name = "Daniel", age = 24, gender = "male";
const sayHi = (name, age, gender) => {
    return (`Hello! you are a ${name}, you are ${age} old, gender ${gender}!`);
};
console.log(sayHi("hi", 24, "female"));
// boolean
let isDone = false;
// null
let n = null;
// undefined
let u = undefined;
// number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(`decimal ${decimal}, hex ${hex}, binary ${binary}, octal ${octal}`);
// decimal 6, hex 61453, binary 10, octal 484
// string
let color = "blue";
color = 'red';
let myName = `Lee`; // ES6 템플릿 문자열
let greeting = `Hello, my name is ${myName}.`; // ES6 템플릿 대입문
// object
const obj = {};
// array
let list1 = [1, 'two', true];
let list2 = [1, 2, 3];
let list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
let tuple;
tuple = ['hello', 10]; // OK
// tuple = [10, 'hello']; // Error
// tuple = ['hello', 10, 'world', 100]; // Error
// tuple.push(true); // Error
// enum : 열거형은 숫자값 집합에 이름을 지정한 것이다.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
let c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
let c3 = Color3.Blue;
console.log(c3); // 4
/*
any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
*/
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
console.log("type :", typeof obj == "object");
console.log("type :", typeof notSure == "number");
// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser() {
    console.log("This is my warning message");
}
// never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=index.js.map