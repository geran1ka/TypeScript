"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = void 0;
const calcTotalPrice = ({ title, price, count, option: { weight }, }) => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: цена ${totalPrice}, общий вес ${totalWeight}`;
};
exports.calcTotalPrice = calcTotalPrice;
