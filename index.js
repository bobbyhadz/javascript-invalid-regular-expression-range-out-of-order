// Invalid regular expression Range out of Order Error in JS

// EXAMPLE 1 - Specify the hyphen as the first or last character

const str = 'bobbyhadz 123';

// ✅ specified hyphen as the first character

console.log(/[-a-zA-Z0-9 ]/g.test(str)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Escaping the hyphen with a backslash

// const str = 'bobbyhadz 123';

// console.log(/[a\--zA-Z0-9 ]/g.test(str)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Specify the hyphen as the first character in the character class

// const str = 'bobbyhadz 123';

// // ✅ specified hyphen as the first character

// console.log(/[-a-zA-Z0-9 ]/g.test(str)); // 👉️ true
