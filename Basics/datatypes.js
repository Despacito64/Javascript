//Primitive
/*
String, Number, Boolean, null, undefined, Symbol, BigInt
*/
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

Return type of variables in JavaScript
1) Primitive Datatypes ->> use stack memory
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes ->> use heap memory
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */
/*
Reference
Array, Objects, Functions
*/
let myObj={
    name:"abc",
    age:23,
};
const myFunction=function(){
    console.log("helllooo");
     
}
let subjectOne="maths"
let subjectTwo=subjectOne
subjectTwo="english"

/*
only value of subjectTwo is changed as a copy of subjectOne is passed to it
*/
let userOne={
    userName:"harsh",
};
let userTwo=userOne
userTwo.userName="naman"
/*
value in userOne will also be changed as objects are stored in heap memory and it will passed as reference
*/