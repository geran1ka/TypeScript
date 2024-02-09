{
  interface Goods {
    title: string;
    count: number;
  }

  const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
    const goods = arr.find((item) => item.title === title);
    return goods?.count ?? 0;
  };

  const goodsCount = [
    {
      title: "Компьютер",
      count: 10,
    },
    {
      title: "Планшет",
      count: 12,
    },
    {
      title: "Мышка",
      count: 1,
    },
    {
      title: "Смартфон",
      count: 20,
    },
  ];

  const countP = getCountGoods(goodsCount, "Смартфон");
  console.log("countP: ", countP);

  const countN = getCountGoods(goodsCount, "мышка");
  console.log("countN: ", countN);
}

{
  class HttpResponse<D, E> {
    protected success: boolean;
    protected data?: D;
    protected code?: E;

    constructor(success: boolean, data?: D, error?: E) {
      this.success = success;

      if (data) {
        this.data = data;
      }

      if (error) {
        this.code = error;
      }
    }
  }

  const responseToken = new HttpResponse<number, string>(true, 4656546);
  const responseUser = new HttpResponse<string, string>(
    true,
    "fhdiuhjsdfsjdkjfn"
  );
}

{
  interface Goods {
    title: string;
    count: number;
    price: number;
  }

  abstract class Cart<T extends Goods> {
    protected goods: T[] = [];

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
    type: string;
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
    id: "dsadad",
    title: "Монитор As",
    price: 1000,
    count: 1,
    description: "Лучший монитор 2022",
    type: "monitor",
  });
}
