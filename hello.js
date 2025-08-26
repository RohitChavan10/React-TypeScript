// Practice of TypeScript
var hello = "hello";
var number = 100;
var largeNumber = BigInt("12323456789045634567876543");
var isActive = false;
var uniquekey = Symbol("description");
var emptyValue = null;
var uninitializedValue;
var person = {
    name: "Rohit",
    age: 23,
};
//array
var numberes = [1, 2, 3, 4];
var name = ["Alice", "John", "Bob"];
//Enums
//Dark Light System
var DarkMode;
(function (DarkMode) {
    DarkMode["DARK"] = "DARK";
    DarkMode["LIGHT"] = "LIGHT";
    DarkMode["SYSTEM"] = "SYSTEM";
})(DarkMode || (DarkMode = {}));
var theme = DarkMode.LIGHT;
if (theme === DarkMode.LIGHT) {
    console.log("light");
}
var user = {
    id: '1',
    name: 'John',
    age: 24,
    birthday: "16 March"
};
var car = {
    brand: "toyota",
    year: 2024,
};
var myDog = {
    name: "Tommy",
    age: 7,
};
var direction = "north";
var value = { a: "s", b: 10 };
//Type Assertions and Casting
var someValue = "this is a String";
var strlength = someValue.length;
//Basic Functions
function doSomething(a, b) {
    return "Result=" + (a + b);
}
console.log(doSomething(2, 5));
//Optional parameters
function optional(a, b) {
    if (!b)
        return '';
    return "Result =" + (a + b);
}
//Default Parameters
function defaultParmeters(a, b) {
    if (b === void 0) { b = 10; }
    return "Result =" + (a + b);
}
console.log(defaultParmeters(10));
var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
//Higher Order Function
function higherOrder(func, other) {
    return func(other, 10);
}
function divide(a, b) {
    return a / b;
}
console.log(higherOrder(divide, 10));
//void
function returnVoid() {
    console.log('Something');
}
//unknown
function anyFunction(a) {
    return a;
}
//never
function neverReturnAValue() {
    throw new Error("error");
}
function neverIsTricky(x) {
    if (typeof x === "string") {
        console.log("do Something");
    }
    else if (typeof x === 'number') {
        console.log('do Something');
    }
    else {
        return x;
    }
}
//Function global type
function functionGlobalType(func) {
    return func(1, 2);
}
//Rest Parameter
function restParameter(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return x + n; });
}
var Respara = restParameter(10, 1, 2, 3, 4, 5);
console.log(Respara);
function paramDestructuring(values) {
    var a = values.a, b = values.b, c = values.c;
    return a + b + c;
}
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
}
var Result1 = combine(6, 4);
var Result2 = combine("Hello", " World");
console.log("result1=", Result1, "result2=", Result2);
