var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

let pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;
/*
^ — початок рядка, $ — кінець рядка.
одне, або два слова (які можуть містити латинські букви, цифри), яке може бути розділене крапкою:
   [a-zA-Z0-9]+ — це одне слово до крапки (1 або більше повторень);
   (\.[a-zA-Z0-9]+)* — це друге слово після крапки (0 або більше повторень).
Далі проста валідація @ і домени.
*/

arr.forEach((elementEmail) => {
    if (pattern.test(elementEmail.email)) {
        console.log(`Email ${elementEmail.email} підходить`);
    }
    else {
        console.log(`Email ${elementEmail.email} не підходить`);
    };
}
);
