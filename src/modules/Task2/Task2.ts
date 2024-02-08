import { AbstractSelling } from "./AbstractSelling";
import { CountAbstacrtSeling } from "./CountAbstractSeling";
import { FixedAbstractSeling } from "./FixedAbstractSeling";
import { Product } from "./Product";

const products: AbstractSelling[] = [
  new FixedAbstractSeling(new Product("Диван", 89.5), 3),
  new FixedAbstractSeling(new Product("Тумба", 8.3), 10),
  new FixedAbstractSeling(new Product("Кухня", 210.99), 2),
  new FixedAbstractSeling(new Product("Телевизор", 55.55), 5),
  new CountAbstacrtSeling(new Product("Компьютер", 100.99), 10, 5),
  new CountAbstacrtSeling(new Product("Клавиатура", 11.23), 15, 11),
  new CountAbstacrtSeling(new Product("Мышка", 5.4), 20, 10),
  new CountAbstacrtSeling(new Product("Коврик", 3.1), 5, 5),
];

products.map((item, i): void => {
  console.log(`${i}.`);
  console.log(item);
  console.log(`Итоговая стоимость составила ${item.getPrice()}`);
});

products.map((item, i): void => {
  console.log(
    `${i + 1}. Итоговая стоимость продукта "${
      item.product.title
    }" в количестве ${item.count} составляет ${item.getPrice()}$`
  );
});

console.log("-------------------сортировка старт----------------");
products.sort(AbstractSelling.compare);
console.log("-------------------сортировка стоп----------------");

products.map((item, i): void => {
  console.log(
    `${i + 1}. Продукт "${
      item.product.title
    }" отсортирован по стоимости --- ${item.getPrice()}$`
  );
});

// products.map((item, i): void => {
//   console.log(`${i}.`);
//   // console.log(item);
//   console.log(`Итоговая стоимость составила ${item.getPrice()}`);
// });
