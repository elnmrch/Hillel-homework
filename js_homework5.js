var instructorServices = {
    "lecture": "100000 USD",
    "homeworkReview": "30000 USD",
    "chatHelp": "20000 USD",
    "coffeeWithMarichka": "250000 USD",

    // Метод для обчислення загальної вартості
    price: function() {
        let totalPrice = 0;
        let servicesValues = Object.values(this); // Отримуємо всі значення послуг
        for (let value of servicesValues) {
            // Перевіряємо, чи значення є рядком (ціною), а не методом
            if (typeof value === 'string') {
                let priceInNum = parseInt(value); // відкидаємо USD
                totalPrice += priceInNum;
            }
        }
        return totalPrice;
    },
    // Метод для обчислення максимальної ціни
    maxPrice: function() {
        let maxPrice = 0;
        let servicesValues = Object.values(this);
        for (let value of servicesValues) {
            if (typeof value === 'string') {
                let priceInNum = parseInt(value);
                maxPrice = Math.max(maxPrice, priceInNum);
            }
        }
        return maxPrice;
    },
    // Метод для обчислення мінімальної ціни
    minPrice: function() {
        let minPrice = Infinity;
        let servicesValues = Object.values(this);
        for (let value of servicesValues) {
            if (typeof value === 'string') {
                let priceInNum = parseInt(value);
                minPrice = Math.min(minPrice, priceInNum);
            }
        }
        return minPrice;
    },
    // Метод для додавання нової послуги
    addService: function(serviceName, price) {
        this[serviceName] = price;
    }
};
instructorServices.addService("studyBreak", "70000 USD");

console.log("Total price of services: " + instructorServices.price() + " USD");
console.log("Max price: " + instructorServices.maxPrice() + " USD");
console.log("Min price: " + instructorServices.minPrice() + " USD");
