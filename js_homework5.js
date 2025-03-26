// Метод для обчислення загальної суми послуг
function sum() {
  let total = 0;
  for (let key in this) {
    if (typeof this[key] === "string") {
      total += parseFloat(this[key]);
    }
  }
  return total;
}

// Метод для обчислення мінімальної суми послуг
function minPrice() {
  let min;
  for (let key in this) {
    let currentPrice = parseFloat(this[key]);
    // Якщо min ще не встановлено або поточна ціна менша за min – оновлюємо min
    if (min === undefined || currentPrice < min) {
      min = currentPrice;
    }
  }
  return min;
}

// Метод для обчислення максамальної суми послуг
function maxPrice() {
  let max; 
  for (let key in this) {
    let currentPrice = parseFloat(this[key]);
    if (max === undefined || currentPrice > max) {
      max = currentPrice;
    }
  }
    return max;
}

var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  "Розбити скло": "200 грн",
  "Оформлення бороди": "150,50 грн",

  // Прив'язуємо функції як методи об'єкта
  sum: sum,
  minPrice: minPrice,
  maxPrice: maxPrice
};

console.log("Сума всіх послуг:", services.sum());      
console.log("Мінімальна ціна:", services.minPrice());     
console.log("Максимальна ціна:", services.maxPrice());   
