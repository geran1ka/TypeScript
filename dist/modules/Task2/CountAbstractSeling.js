"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountAbstacrtSeling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class CountAbstacrtSeling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count, minNumberProductsDiscount) {
        super(product, count);
        this._minNumberProductsDiscount = 3;
        this._discountPercentage = 10;
        this._minNumberProductsDiscount = minNumberProductsDiscount;
    }
    get minNumberProductsDiscount() {
        return this._minNumberProductsDiscount;
    }
    set minNumberProductsDiscount(value) {
        this._minNumberProductsDiscount = value;
    }
    get discountPercentage() {
        return this._discountPercentage;
    }
    set discountPercentage(value) {
        this._discountPercentage = value;
    }
    getPrice() {
        if (this.count >= this.minNumberProductsDiscount) {
            return (Math.round(this.product.price *
                this.count *
                (1 - this.discountPercentage / 100) *
                100) / 100);
        }
        else {
            return Math.round(this.product.price * this.count * 100) / 100;
        }
    }
}
exports.CountAbstacrtSeling = CountAbstacrtSeling;
