function checkProbabilityTheory(count) {
    let randomEven = 0;
    let randomOdd = 0;
    let amountOfAll = 0;
    let randomNumber = 0;
    for (let i = 0; i < count; i++) {
       randomNumber = Math.round(Math.random() * 1000); 
       if (randomNumber % 2 === 0) {
       randomEven++;
       }
       else {
       randomOdd++;
       }
       amountOfAll++;
    }
    let percenEvenOdd = Math.round((randomEven / amountOfAll) * 100);

    console.log("Кількість згенерованих чисел: " + amountOfAll); 
    console.log("Парних чисел: " + randomEven);  
    console.log("Непарних чисел: " + randomOdd);  
    console.log("Відсоток парних до непарних: " + percenEvenOdd + "%"); 
}
checkProbabilityTheory(1000);