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
    static compare(first, second) {
        return first.getPrice() - second.getPrice() > 0
            ? 1
            : first.getPrice() - second.getPrice() < 0
                ? -1
                : 0;
    }
}
exports.AbstractSelling = AbstractSelling;
