let count: number | void;
count = 1;
let obj: {} | null = null;
obj = {
  name: "Макс",
  age: 35,
};

const logger = (id: string | number) => {
  if (typeof id === "string") {
    console.log(id.charAt);
  } else {
    console.log(id.toFixed);
  }
  console.log(id);
};

const loggerObj = (obj: { a: number } | { b: number }) => {
  if ("a" in obj) {
    obj.a;
  } else {
    obj.b;
  }
};

const loggerError = (err: string[] | string | Error) => {
  if (Array.isArray(err)) {
    for (const str of err) {
      str.toLowerCase();
    }
  }

  if (err instanceof Error) {
    console.log(err.message);
  } else {
    err.concat();
  }
};

const loggerError2 = (err: string): never => {
  throw new Error(err);
};

const hole: null = null;

const vacuum: undefined = undefined;
const vacuum2: void = undefined;
