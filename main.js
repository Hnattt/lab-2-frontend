// Task 1 (4.1)
function calcTask4Value(x) {
    return (x + Math.sin(2 * x)) / (x ** 2 - 3);
}
console.log("Задача 4:");
console.log("(варіант а):");
let x1 = 2.4;
let xMax1 = 6.9;
let deltaX1 = 0.4;
while (x1 <= xMax1) {
    let z1 = calcTask4Value(x1);
    console.log(`x = ${x1.toFixed(2)}, z = ${z1.toFixed(4)}`);
    x1 += deltaX1;
}
console.log("(варіант б):");
let x2 = 3.1;
let deltaX2 = 0.8;
let n2 = 6;
for (let i = 0; i < n2; i++) {
    let z2 = calcTask4Value(x2);
    console.log(`x = ${x2.toFixed(2)}, z = ${z2.toFixed(4)}`);
    x2 += deltaX2;
}
// Task 1 (5.1)
function calcTask5S() {
    let S = 0;
    for (let i = 10; i <= 30; i++) {
        S += (i ** 3 + 3 * i ** 2 + 7) / (3 * i + 8);
    }
    return S;
}
function calcTask5Z() {
    let i = 5;
    let j = 11;
    let Z = 1;
    for (let k = i; k <= j; k++) {
        Z *= ((k + 3) ** 2) / ((k + 7) * (k + 9));
    }
    return Z;
}
console.log("Задача 5:");
let S = calcTask5S();
let Z = calcTask5Z();
console.log(`S = ${S.toFixed(4)}`);
console.log(`Z = ${Z.toFixed(4)}`);
// Task 2 (7.2 (3))
let A = [6.3, -2.1, 4.2, 5.3, -7.2, -4.5];
let negativeElements = A.filter(element => element < 0);
let sum = negativeElements.reduce((acc, curr) => acc + curr, 0);
let average = sum / negativeElements.length;
console.log("Задача 7.2(3):");
console.log(`Середнє арифметичне від’ємних елементів: ${average.toFixed(4)}`);
// Task 4 (3)
let materials = [
    {
        name: "Цемент для бетону",
        type: "Будівельний матеріал",
        priceforunit: 120.00,
        unit: "кг",
        alternative: "Бетонна суміш"
    },
    {
        name: "Теплоізоляція",
        type: "Ізоляційні матеріали",
        priceforunit: 95.30,
        unit: "м²",
        alternative: "Теплоізоляційні панелі"
    },
    {
        name: "Гіпсокартон",
        type: "Будівельний матеріал",
        priceforunit: 170.50,
        unit: "лист",
        alternative: "Панелі для стін"
    },
    {
        name: "Металеві двері",
        type: "Будівельні матеріали",
        priceforunit: 2500.00,
        unit: "шт.",
        alternative: "Дерев'яні двері"
    }
];
console.log("Діаграма");
for (let i = 0; i < materials.length; i++) {
    console.log(`Матеріал: ${materials[i].name}\nТип: ${materials[i].type}\nЦіна за одиницю: ${materials[i].priceforunit} грн/${materials[i].unit}\nАльтернатива: ${materials[i].alternative}\n`);
}
