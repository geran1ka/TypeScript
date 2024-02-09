{
  const log = <T>(val: T): T => {
    console.log(val);
    return val;
  };

  // log("string");
  // log<string>("string"); //указание конкретного типа generic
  // log(5);
  // log<boolean>(!5);
}
{
  const log = <T, B>(val: T, val2: B): T => {
    console.log(val, val2);
    return val;
  };

  // log("string", 10);
  // log<string, string>("string", "str"); //указание конкретного типа generic
  // log(5, true);
  // log<boolean, number>(!5, 5);
}
{
  const arr: Array<string> = ["a", "b", "c"];
}

{
  // функция фильтрации
  const filterArr = <T>(arr: T[], exclude: T[]): T[] => {
    return arr.filter((item) => !exclude.includes(item));
  };

  const result = filterArr([1, 2, 3, 4, 5], [1, 3, 5]);
  console.log("result: ", result);
}

{
  // функция фильтрации
  type filterArr = <T>(arr: T[], exclude: T[]) => T[];
  const filterArr: filterArr = (arr, exclude) => {
    return arr.filter((item) => !exclude.includes(item));
  };

  const result = filterArr([1, 2, 3, 4, 5], [1, 3, 5]);
  console.log("result: ", result);
}

{
  //! Использование generic  внутри type
  type HttpResponse<T> = {
    success: boolean;
    error?: boolean;
    data?: T[];
  };

  type product = {
    id: number;
    title: string;
    count: number;
  };

  type person = {
    name: string;
    post: string;
  };

  const response: HttpResponse<product> = {
    success: true,
    error: false,
    data: [
      {
        id: 1215,
        title: "Капуста",
        count: 10,
      },
      {
        id: 1216,
        title: "Морковь",
        count: 12,
      },
    ],
  };

  const response2: HttpResponse<person> = {
    success: true,
    data: [
      {
        name: "Иван",
        post: "Кладовщик",
      },
      {
        name: "Петр",
        post: "Сторож",
      },
    ],
  };
}

{
  //!
  type HttpResponse<T> = {
    success: boolean;
    error?: boolean;
    data?: T;
  };

  type product = {
    id: number;
    title: string;
    count: number;
  };

  type person = {
    name: string;
    post: string;
  };

  const response: HttpResponse<product[]> = {
    success: true,
    error: false,
    data: [
      {
        id: 1215,
        title: "Капуста",
        count: 10,
      },
      {
        id: 1216,
        title: "Морковь",
        count: 12,
      },
    ],
  };

  const response2: HttpResponse<person[]> = {
    success: true,
    data: [
      {
        name: "Иван",
        post: "Кладовщик",
      },
      {
        name: "Петр",
        post: "Сторож",
      },
    ],
  };

  const response3: HttpResponse<string> = {
    success: true,
    data: "Заказ оформлен",
  };
}

{
  //!

  interface HttpResponseError {
    success: false;
    error: string;
  }

  interface HttpResponseSuccess<T> {
    success: true;
    data: T;
  }

  type HttpResponse<T> = HttpResponseError | HttpResponseSuccess<T>;

  interface product {
    id: number;
    title: string;
    count: number;
  }

  interface person {
    name: string;
    post: string;
  }

  const response: HttpResponse<product[]> = {
    success: true,
    data: [
      {
        id: 1215,
        title: "Капуста",
        count: 10,
      },
      {
        id: 1216,
        title: "Морковь",
        count: 12,
      },
    ],
  };

  const response2: HttpResponse<person[]> = {
    success: true,
    data: [
      {
        name: "Иван",
        post: "Кладовщик",
      },
      {
        name: "Петр",
        post: "Сторож",
      },
    ],
  };

  const response3: HttpResponse<string> = {
    success: true,
    data: "Заказ оформлен",
  };
}
