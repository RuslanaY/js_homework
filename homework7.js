// Завдання 1
// Перевірка валідності мейлів в масиві обєктів
var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "<dmitro.porohov@yahoo.com>" //зайві символи
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" // не валідний мейл
  },
];

const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/; // регулярний вираз для перевірки валідності

const validEmails = arr
  .map(item => {
    if (!item.email) return null;            
    const cleanedEmail = item.email.replace(/[<>]/g, '').trim();
    return emailRegex.test(cleanedEmail) ? cleanedEmail : null;
  })
  .filter(email => email !== null);

console.log(validEmails);





// Завдання 2
// Пошук слів що не містять літеру Аа для довжини більше 6 символів
const text = `Wonderful apple banana Joyful Task Time Happiness Freedom Butter coding success function`;

const regex = /\b[^Aa\s]{6,}\b/g; // регулярний вираз для перевірки слів

const matches = text.match(regex);

console.log(matches);
