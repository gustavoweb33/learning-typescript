const addAndHandle = (n1: number, n2: number, callback: (num: number) => void) => {
    const result = n1 + n2;
    const callbackResult = callback(result);
    console.log(callbackResult);
}


addAndHandle(10, 20, (result) => {
   let plusOne = result + 1;
   return plusOne;
});
