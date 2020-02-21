"use strict";
const addAndHandle2 = (n1, n2, callback) => {
    const result = n1 + n2;
    const callbackResult = callback(result);
    console.log(callbackResult);
};
addAndHandle2(10, 20, (result) => {
    let plusOne = result + 1;
    return plusOne;
});
