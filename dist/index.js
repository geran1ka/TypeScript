"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./modules/product");
const calc_1 = require("./modules/calc");
const result = (0, calc_1.calcTotalPrice)(product_1.product);
console.log(result);
const arrObj = [{ name: "Макс" }];
