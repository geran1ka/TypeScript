import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class FixedAbstractSeling extends AbstractSelling {
  readonly discount: number = 10;
  constructor(product: Product, count: number) {
    super(product, count);
  }

  public override getPrice(): number {
    return this._product.price > this.discount
      ? Math.round((this._product.price - this.discount) * this.count * 100) /
          100
      : Math.round(this._product.price * this.count);
  }
}
