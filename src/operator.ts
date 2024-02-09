{
  interface Goods {
    title: string;
    count: number;
    price: number;
  }

  type KeysOFGoods = keyof Goods;

  const filter = <T, K extends keyof T>(arr: T[], key: K, value: T[K]) => {
    return arr.filter((item: T) => item[key] === value);
  };

  const filter1 = (arr: Goods[], key: KeysOFGoods, value: string | number) => {
    return arr.filter((goods: Goods) => goods[key] === value);
  };

  const filter2 = (
    arr: Goods[],
    key: KeysOFGoods,
    value: Goods[KeysOFGoods]
  ) => {
    return arr.filter((goods: Goods) => goods[key] === value);
  };

  const categories = ["notebook", "e-book", "smartphone", "monitor"] as const;

  type categoryTypes = (typeof categories)[number];

  abstract class Cart<T extends Goods> {
    public goods: T[] = [];

    public add(item: T): void {
      this.goods.push(item);
    }

    public get(title: string): T | null {
      return this.goods.find((item) => item.title === title) ?? null;
    }

    public get TotalPrice(): number {
      return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
    }
  }

  interface TechGoods {
    id: string;
    title: string;
    count: number;
    price: number;
    type: categoryTypes;
    description: string;
  }

  class TechCard extends Cart<TechGoods> {}

  const techCard = new TechCard();

  techCard.add({
    id: "dsadad",
    title: "Монитор Samsung",
    price: 3000,
    count: 3,
    description: "Лучший монитор 2020",
    type: "monitor",
  });

  techCard.add({
    id: "dsad",
    title: "Монитор As",
    price: 1000,
    count: 1,
    description: "Лучший монитор 2022",
    type: "smartphone",
  });

  const res = filter(techCard.goods, "id", "dsadad");

  console.log(res);

  const goodsO: TechCard["goods"][number] = {
    id: "dsadad",
    title: "Монитор Samsung",
    price: 3000,
    count: 3,
    description: "Лучший монитор 2020",
    type: "monitor",
  };

  const goods2: typeof goodsO = {
    id: "dsad",
    title: "Монитор As",
    price: 1000,
    count: 1,
    description: "Лучший монитор 2022",
    type: "monitor",
  };

  type keysOFGoods = keyof typeof goodsO;

  const keys: keysOFGoods = "type";
}
