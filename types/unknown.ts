//unknown is the type-safe counterpart of any

let userInput: unknown;
let userName: string;
let anyInput: any;

userInput = 'David';

//Anything is assignable to unknown, 
anyInput = userInput;

//but unknown isn’t assignable to anything but itself and any.
//this will result in an error.
//userName = userInput;


//no operations are permitted on an unknown 
//without first asserting or narrowing to a more specific type
if (typeof userInput === 'string') {
    userName = userInput;
}

//unknown is better than any b/c it provies type checking
//if when don't know the type but we know what we want to do with it.