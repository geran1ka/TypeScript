"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    constructor(product, count) {
        this._product = product;
        this._count = count;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this.count = value;
    }
    compare(other) {
        return other.getPrice() - this.getPrice();
    }
}
exports.AbstractSelling = AbstractSelling;
