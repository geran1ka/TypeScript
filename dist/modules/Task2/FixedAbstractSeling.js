"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedAbstractSeling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FixedAbstractSeling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
        this.discount = 10;
    }
    getPrice() {
        return this._product.price > this.discount
            ? Math.round((this._product.price - this.discount) * this.count * 100) /
                100
            : Math.round(this._product.price * this.count);
    }
}
exports.FixedAbstractSeling = FixedAbstractSeling;
