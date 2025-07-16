var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

var total = 0;
var min = null;
var max = null;

for (var key in services) {
  var textPrice = services[key]; // Наприклад: "60 грн"
  var numberPrice = Number(textPrice.replace(" грн", "")); // Отримуємо число: 60

 total = total + numberPrice;

  if (min === null || numberPrice < min) {
    min = numberPrice;
  }

  if (max === null || numberPrice > max) {
    max = numberPrice;
  }
}

console.log("Загальна вартість: " + total + " грн");
console.log("Мінімальна ціна: " + min + " грн");
console.log("Максимальна ціна: " + max + " грн");

