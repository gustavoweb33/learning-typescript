//enum is a way of giving more friendly names to sets of numeric values.
//values start at 0 unless otherwise stated.
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'John',
    age: 23,
    hobbies: ['reading', 'biking'],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log('access granted');
}