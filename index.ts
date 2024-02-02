const title: string = "Квадракоптер";
const price: number = 5_000;
const count: number = 5;
const arrived: boolean = false;

const product = {
  title: "Квадракоптер",
  price: 15_000,
  count: 5,
  arrived: false,
};

const calcTotalPrice = (item: {
  title: string;
  price: number;
  count: number;
}): string => {
  const totalPrice: number = item.price * item.count;
  return `${item.title}: ${totalPrice}`;
};

const result = calcTotalPrice(product);
console.log("result: ", result);
