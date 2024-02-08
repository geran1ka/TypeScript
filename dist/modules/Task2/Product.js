"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
exports.Product = Product;
