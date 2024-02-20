let string1 = 'apple';
let string2 = 'orange';
let numericalValue = 42;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Test 1: Is string1 equal to 'apple'? I predict True.");
console.log(string1 == 'apple');

console.log("Test 2: Is string2 not equal to 'banana'? I predict True.");
console.log(string2 != 'banana');

// Tests using the lower case function
console.log("Test 3: Is string1 in lowercase equal to 'APPLE' in uppercase? I predict True.");
console.log(string1.toLowerCase() == 'apple');

// Numerical tests
console.log("Test 4: Is numericalValue greater than 30? I predict True.");
console.log(numericalValue > 30);

console.log("Test 5: Is numericalValue less than or equal to 50? I predict True.");
console.log(numericalValue <= 50);

// Tests using "and" and "or" operators
console.log("Test 6: Is numericalValue greater than 30 and less than 50? I predict True.");
console.log(numericalValue > 30 && numericalValue < 50);

console.log("Test 7: Is numericalValue greater than 50 or less than 40? I predict False.");
console.log(numericalValue > 50 || numericalValue < 40);

// Test whether an item is in an array
console.log("Test 8: Is 3 in the array? I predict True.");
console.log(array.includes(3));

// Test whether an item is not in an array
console.log("Test 9: Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
