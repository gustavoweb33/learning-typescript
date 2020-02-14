//with unions we can be more flexible with the params that we get.
const combine = (
    input1: number | string,
    input2: number | string,
    //this param can only have one of these two values. 
    //this is called a literal.
    resultConversion: 'as-number' | 'as-text'
) => {
    let result;

    if (typeof input1 === 'number'
        && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        //inputs are converted to integers incase string numbers are passed in. 
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(22, 66, 'as-number');
const combineNames = combine('John', 'Wick', 'as-text');