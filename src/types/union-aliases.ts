//aliases create a new name for a type.
//Aliasing doesn’t actually create a new type - it creates a new name to refer to that type
type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text';

//with unions we can be more flexible with the params that we get.
const combine = (
    input1: Combinable,
    input2: Combinable,
    //this param can only have one of these two values. 
    //this is called a literal.
    resultConversion: ConversionDescription
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