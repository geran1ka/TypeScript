{
  interface Goods {
    id: number;
    title: string;
    count?: number;
    readonly price: number;
  }

  const title = ["notebook", "e-book", "smartphone", "monitor"] as const;
  type categotyTypes = (typeof title)[number];

  type partialGoods = Partial<Goods>; //! Partial - делает все поля не обязательными

  type requaredGoods = Required<Goods>; //! Required - делает все пол обязательными

  type readonlyGoods = Readonly<Goods>; //! Readonly - делает все поля доступными только для чтения

  type RRGoods = Required<Readonly<Goods>>; //! можно испоьлзовать несколько утилитарных типов

  type recordGoods = Record<categotyTypes, Goods>;

  const listGoods: recordGoods = {
    monitor: {
      id: 123123,
      price: 2000,
      title: "monitor",
    },
    "e-book": {
      id: 12,
      price: 4000,
      title: "e-book",
      count: 10,
    },
    notebook: {
      id: 10,
      price: 4000,
      title: "notebook",
      count: 10,
    },
    smartphone: {
      id: 13,
      price: 4000,
      title: "smartphone",
      count: 10,
    },
  };

  type omitGoods = Omit<Goods, "id">; //! Исключение ключа

  type pickGoods = Pick<Goods, "title" | "price">; //! Ключи которые долнжны использоваться

  const getGoods = (title: string, price: number, count: number): Goods => {
    return {
      id: Math.floor(Math.random() * 10e8),
      title,
      price,
      count,
    };
  };

  const getGoods1 = ({ title, price, count }: Omit<Goods, "id">): Goods => {
    return {
      id: Math.floor(Math.random() * 10e8),
      title,
      price,
      count,
    };
  };

  const goodsres = getGoods1({
    title: "fdsd",
    price: 20,
    count: 2,
  });

  type goods = ReturnType<typeof getGoods>;

  type p = Parameters<typeof getGoods>;

  const getGoods3 = (): Promise<Goods[]> =>
    fetch("https://api.com").then((response: Response) => response.json());

  type P = ReturnType<typeof getGoods3>;

  type R = Awaited<ReturnType<typeof getGoods3>>;
  console.log("goodsres: ", goodsres);
}
