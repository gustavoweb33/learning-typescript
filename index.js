var addAndHandle = function (n1, n2, callback) {
    var result = n1 + n2;
    var callbackResult = callback(result);
    console.log(callbackResult);
};
addAndHandle(10, 20, function (result) {
    var plusOne = result + 1;
    return plusOne;
});
