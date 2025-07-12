function randomNumbers(count) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * 901) + 100;

    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log("Згенеровано чисел:", count);
  console.log("Парних:", even);
  console.log("Непарних:", odd);
}
randomNumbers(10);
