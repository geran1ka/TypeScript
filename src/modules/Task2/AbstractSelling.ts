import { Product } from "./Product";

export abstract class AbstractSelling {
  public _product: Product;
  public _count: number;

  constructor(product: Product, count: number) {
    this._product = product;
    this._count = count;
  }

  public get product(): Product {
    return this._product;
  }

  public set product(value: Product) {
    this._product = value;
  }

  public get count(): number {
    return this._count;
  }

  public set count(value: number) {
    this.count = value;
  }

  public abstract getPrice(): number;

  compare(other: AbstractSelling): number {
    return other.getPrice() - this.getPrice();
  }
}
