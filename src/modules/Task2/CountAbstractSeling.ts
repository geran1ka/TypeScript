import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class CountAbstacrtSeling extends AbstractSelling {
  protected _minNumberProductsDiscount: number = 3;
  protected _discountPercentage: number = 10;

  constructor(
    product: Product,
    count: number,
    minNumberProductsDiscount: number
  ) {
    super(product, count);
    this._minNumberProductsDiscount = minNumberProductsDiscount;
  }

  get minNumberProductsDiscount(): number {
    return this._minNumberProductsDiscount;
  }

  set minNumberProductsDiscount(value: number) {
    this._minNumberProductsDiscount = value;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }

  override getPrice(): number {
    if (this.count >= this.minNumberProductsDiscount) {
      return (
        Math.round(
          this.product.price *
            this.count *
            (1 - this.discountPercentage / 100) *
            100
        ) / 100
      );
    } else {
      return Math.round(this.product.price * this.count * 100) / 100;
    }
  }
}
