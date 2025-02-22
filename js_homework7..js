let words = "Wonderful Joyful Happiness Time Task Apple";
let pattern = /\b[^Aa\s]{6,}\b/g;  // додали b для відокремлення слів, s для пробілу, {6,} для вказання кількості символів

let matches = words.match(pattern);
console.log(matches);
