// 'number' + 3 + 3
// Step 1: 'number' + 3 so 'number3' (string + number → string)
// Step 2: 'number3' + 3 so 'number33'
// Result: 'number33' When you add a string and a number in JavaScript, everything becomes a string.
console.log('number' + 3 + 3); // 'number33'

// null + 3
// null is treated like 0 in math, So 0 + 3 = 3.
console.log(null + 3); // 3

// 5 && "qwerty"
// The && operator checks if both values are “truthy” (not empty or false). Since both 5 and "qwerty" are truthy, JavaScript gives you the second value, which is "qwerty".
console.log(5 && "qwerty"); // 'qwerty'

// +'40' + +'2' + "hillel"
// Unary plus converts strings to numbers so 40 + 2 = 42
// 42 + 'hillel'  so '42hillel'
console.log(+'40' + +'2' + "hillel"); // '42hillel'

// '10' - 5 === 6
// '10' becomes 10  is like 10 - 5 = 5 so 5 === 6 so false
console.log('10' - 5 === 6); // false

// true + false
// true  is like 1, false  is like 0 so 1 + 0 = 1
console.log(true + false); // 1

// '4px' - 3
// '4px' cannot be converted to a number so NaN - 3 = NaN
console.log('4px' - 3); // NaN

// '4' - 3
// '4' becomes 4  is like 4 - 3 = 1 The string '4' is turned into number 4.
console.log('4' - 3); // 1

// '6' + 3 ** 0
// 3 ** 0 = 1 so '6' + 1 = '61'
console.log('6' + 3 ** 0); // '61'

// 12 / '6'
// '6' becomes 6 so 12 / 6 = 2
console.log(12 / '6'); // 2

// '10' + (5 === 6)
// 5 === 6  is like false so '10' + false = '10false'
console.log('10' + (5 === 6)); // '10false'

// null == ''
// null is only loosely equal to undefined, not to empty string so false
console.log(null == ''); // false

// 3 ** (9 / 3)
// 9 / 3 = 3 so 3 ** 3 = 27
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true'
// Both strings are non-empty so both coerced to true so true == true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// '0' && 1 = 1 so 0 || 1 = 1
console.log(0 || '0' && 1); // 1

// (+null == false) < 1
// +null  is like 0, false  is like 0 so 0 == 0  is like true so true < 1 so true
console.log((+null == false) < 1); // true

// false && true || true
// false && true so false so false || true = true
console.log(false && true || true); // true

// false && (false || true)
// (false || true) = true so false && true = false
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5
// +null  is like 0, false  is like 0 so 0 == 0  is like true so 1 ** 5 = 1 so true < 1 = false
console.log((+null == false) < 1 ** 5); // false