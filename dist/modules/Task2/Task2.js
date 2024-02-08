"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = require("./AbstractSelling");
const CountAbstractSeling_1 = require("./CountAbstractSeling");
const FixedAbstractSeling_1 = require("./FixedAbstractSeling");
const Product_1 = require("./Product");
const products = [
    new FixedAbstractSeling_1.FixedAbstractSeling(new Product_1.Product("Диван", 89.5), 3),
    new FixedAbstractSeling_1.FixedAbstractSeling(new Product_1.Product("Тумба", 8.3), 10),
    new FixedAbstractSeling_1.FixedAbstractSeling(new Product_1.Product("Кухня", 210.99), 2),
    new FixedAbstractSeling_1.FixedAbstractSeling(new Product_1.Product("Телевизор", 55.55), 5),
    new CountAbstractSeling_1.CountAbstacrtSeling(new Product_1.Product("Компьютер", 100.99), 10, 5),
    new CountAbstractSeling_1.CountAbstacrtSeling(new Product_1.Product("Клавиатура", 11.23), 15, 11),
    new CountAbstractSeling_1.CountAbstacrtSeling(new Product_1.Product("Мышка", 5.4), 20, 10),
    new CountAbstractSeling_1.CountAbstacrtSeling(new Product_1.Product("Коврик", 3.1), 5, 5),
];
products.map((item, i) => {
    console.log(`${i}.`);
    console.log(item);
    console.log(`Итоговая стоимость составила ${item.getPrice()}`);
});
products.map((item, i) => {
    console.log(`${i + 1}. Итоговая стоимость продукта "${item.product.title}" в количестве ${item.count} составляет ${item.getPrice()}$`);
});
console.log("-------------------сортировка старт----------------");
products.sort(AbstractSelling_1.AbstractSelling.compare);
console.log("-------------------сортировка стоп----------------");
products.map((item, i) => {
    console.log(`${i + 1}. Продукт "${item.product.title}" отсортирован по стоимости --- ${item.getPrice()}$`);
});
// products.map((item, i): void => {
//   console.log(`${i}.`);
//   // console.log(item);
//   console.log(`Итоговая стоимость составила ${item.getPrice()}`);
// });
