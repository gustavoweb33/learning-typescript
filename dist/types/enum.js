"use strict";
//enum is a way of giving more friendly names to sets of numeric values.
//values start at 0 unless otherwise stated.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person1 = {
    name: 'John',
    age: 23,
    hobbies: ['reading', 'biking'],
    role: Role.ADMIN
};
if (person1.role === Role.ADMIN) {
    console.log('access granted');
}
