//enum is a way of giving more friendly names to sets of numeric values.
//values start at 0 unless otherwise stated.
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person1 = {
    name: 'John',
    age: 23,
    hobbies: ['reading', 'biking'],
    role: Role.ADMIN
}

if (person1.role === Role.ADMIN) {
    console.log('access granted');
}