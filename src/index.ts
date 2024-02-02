import { product } from "./modules/product";
import { calcTotalPrice } from "./modules/calc";

const result = calcTotalPrice(product);
console.log(result);

const arrObj: {
  name: String;
}[] = [{ name: "Макс" }];
