// Варіант 1

function pow(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result = result * x;
  }

  return result;
}

// Перевірка
console.log(pow(2, 3));
console.log(pow(5, 2));
console.log(pow(7, 0));

// Варіант 2


// function pow(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number' || y < 0 || !Number.isInteger(y)) {
//     return NaN;
//   }

//   let result = 1;
//   for (let i = 0; i < y; i++) {
//     result *= x;
//   }
//   return result;
// }
// // Перевірка
// console.log(pow(2, 3));
// console.log(pow(5, 0));
// console.log(pow(3, 1));
// console.log(pow(2, -1));
// console.log(pow('2', 3));
// console.log(pow(2, 3.5));



// Варіант 3

// export const pow = (x, y) => {
//   if (typeof x !== 'number' || typeof y !== 'number' || y < 0 || !Number.isInteger(y)) {
//     return NaN;
//   }

//   let result = 1;

//   for (let i = 0; i < y; i++) {
//     result *= x;
//   }

//   return result;
// };

// console.log(pow(2, 3));  // 8
// console.log(pow(5, 0));  // 1
// console.log(pow(3, 2));  // 9
