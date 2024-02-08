export class Product {
  public _title: string;
  public _price: number;

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }
}
