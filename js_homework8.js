var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let trustedEmails = [];

let re = /^\w+(\.\w+)?@(gmail\.com|yahoo\.com)$/;

arr.forEach(function(item) {
  if (re.test(item.email)) {
    trustedEmails.push(item.email); // добавляем, если подходит
  }
});

console.log("Надежные email:", trustedEmails);
