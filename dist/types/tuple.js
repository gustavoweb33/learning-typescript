"use strict";
const person3 = {
    name: 'John',
    age: 23,
    hobbies: ['reading', 'biking'],
    role: [3, 'author'] //tuple: fixed length array w/ two elemets. first el a number and then a str
};
//this will give an error b/c the ele[1] is set to string
// person3.role[1] = 99;
//although person3.role.length is set to 2, push still works. This is an exception. 
person3.role.push('admin');
// person3.role = [3, 'author', 'hr']; this is not allowed, unlike push. 
for (const hobby of person3.hobbies) {
    //we can use this method on hobby b/c TS knows hobby is of type string.
    console.log(hobby.toUpperCase());
}
