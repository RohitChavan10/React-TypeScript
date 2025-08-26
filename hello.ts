// Practice of TypeScript

let hello:string="hello";

let number:number=100;

let largeNumber: BigInt =BigInt ("12323456789045634567876543");

const isActive: boolean = false;

const uniquekey = Symbol("description");

const emptyValue: null = null;

let uninitializedValue: undefined;

const person:{name: string; age:number}={
    name:"Rohit",
    age:23,
};

//array
const numberes:number[] =[1,2,3,4];

const name:Array<String>=["Alice","John","Bob"];

//Enums
//Dark Light System

enum DarkMode {
    DARK ="DARK",
    LIGHT = "LIGHT",
    SYSTEM = "SYSTEM",
}

const theme:DarkMode = DarkMode.LIGHT;

if(theme === DarkMode.LIGHT){
    console.log("light");
}

//Interfaces

interface Person {
    birthday: string;
}

interface User extends Person  {
    id:string;
    name: string;
    age?:number;
}

const user: User= {
    id:'1',
    name:'John',
    age:24,
    birthday:"16 March"
}

//Type Aliases
type Car ={
brand:string;
year:number;
} ;

const car:Car = {
    brand:"toyota",
    year:2024,
};

type Animal = {
    name: string;
};

type Dog = Animal &{
    age:number;
}

const myDog:Dog = {
    name:"Tommy",
    age:7,
}

//Literal Types
type Direction = 'north' | 'south';
let direction:Direction="north";

//Interaction Types
type A = {a:string};
type B ={b:number};

type c = A & B;

const value:c ={a:"s",b:10};

//Type Assertions and Casting

const someValue: any= "this is a String";
const strlength:number=(someValue as string).length; 

//Basic Functions
function doSomething (a:number,b:number):string{
    return "Result="+ (a+b);
}

console.log(doSomething(2,5));

//Optional parameters
function optional (a:number,b?:number):string{
    if(!b) return'';
    return "Result ="+ (a+b);
}

//Default Parameters
function defaultParmeters(a:number,b: number=10):string{
    return "Result ="+(a+b);
}
console.log(defaultParmeters(10));


// Call signatures
interface MathOperations{
    (x:number,y:number):number;
} 

const add: MathOperations =(a,b)=> a+b;
const sub: MathOperations=(a,b)=> a-b;

//Higher Order Function

function higherOrder(func:(a:number,b:number)=>number, other:number){
    return func(other,10);
}

function divide(a:number,b:number):number{
    return a/b;
}

console.log(higherOrder(divide,10));

//void
function returnVoid():void {
console.log('Something');
}

//unknown
function anyFunction(a:unknown){
return a;
}

//never
function neverReturnAValue():never{
    throw new Error("error");
}
function neverIsTricky(x:string | number){
    if(typeof x==="string"){
        console.log("do Something");
    }
    else if(typeof x ==='number'){
        console.log('do Something');
    }
    else{
        return x;
    }
}

//Function global type

function functionGlobalType (func: Function){
    return func(1,2);
}

//Rest Parameter
function restParameter(n:number,...m:number []){
return m.map((x)=>x+n)
}
const Respara=restParameter(10,1,2,3,4,5);
console.log(Respara);

//Parameter Destructuring
type ParametersType ={
    a:number,
    b:number,
    c:number,
}
function paramDestructuring (values:ParametersType):number {
    const {a,b,c}= values;
return a+b+c;
}

//Function Overloading
function combine(a:number,b:number):number;
function combine(a:string,b:string):string;

function combine(a:any,b:any):any{
    if(typeof a=== "number" && typeof b==="number"){
        return a+b;
    }
    else if(typeof a==="string" && typeof b==="string"){
        return a.concat(b);
    }
}

const Result1 = combine(6,4);
const Result2 = combine("Hello"," World");

console.log("result1=" ,Result1,"result2=",Result2);
