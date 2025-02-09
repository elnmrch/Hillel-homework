var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    services['Розбити скло'] = "200 грн";

    function price() {
        let totalPrice = 0;
        let maxPrice = 0;
        let minPrice = 0;
        let goods = Object.values(services);  // треба порівнювати ціни, тому перебиратимемо значення
        for (let value of goods) {
            let priceInNum = parseInt(value); // перетворюємо рядок в число, відкинули грн
            totalPrice += priceInNum; // цикл для підрахунку загальної вартості
               
            maxPrice = Math.max(maxPrice, priceInNum); // порівнюємо всі ціни з поточною максимальною і вибираємо найбільшу
            minPrice = Math.min(minPrice, priceInNum);
        }
        console.log("Загальна ціна: " + totalPrice);
        console.log("Максимальна ціна: " + maxPrice);
        console.log("Мінімальна ціна: " + minPrice);
}
price();