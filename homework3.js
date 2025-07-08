export const pow = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number' || y < 0 || !Number.isInteger(y)) {
    return NaN;
  }

  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
};

console.log(pow(2, 3));  // 8
console.log(pow(5, 0));  // 1
console.log(pow(3, 2));  // 9
