"use strict";
//Typescript infers the return type but it can also be set manually.
const add = (n1, n2) => {
    return n1 + n2;
};
//functions without a return statement return void.
//again, TS infers this so there is no need to explicitly state it. 
const printResult = (num) => {
    console.log('Result' + num);
};
printResult(add(4, 2));
//function types
//this lets combinedValues be any kind of functions.
let combinedValues1;
//accepts any fuction w/ two params where each is a number and returns a type of number.
let combinedValues2;
combinedValues2 = add;
//combinedValues2 = printResult;
//this would not work b/c it does not meet the set functin requirements. 
//using callback functions
//using void instead of number in the func type states that anything we return MIGHT not be used.
//we can still use a call back that might return something.
//it does not force us to return void and can be ignored here. 
const addAndHandle = (n1, n2, callback) => {
    const result = n1 + n2;
    callback(result);
};
addAndHandle(10, 20, (result) => {
    let plusOne = result + 1;
    return plusOne;
});
