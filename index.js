"use strict";
const title = "Квадракоптер";
const price = 5000;
const count = 5;
const arrived = false;
const product = {
    title: "Квадракоптер",
    price: 15000,
    count: 5,
    arrived: false,
};
const calcTotalPrice = (item) => {
    const totalPrice = item.price * item.count;
    return `${item.title}: ${totalPrice}`;
};
const result = calcTotalPrice(product);
console.log("result: ", result);
