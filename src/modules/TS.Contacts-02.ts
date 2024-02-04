type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Иван Петров",
    age: 27,
    group: "SEO-специалист",
  },
  {
    name: "Марат Aляуддинов",
    age: 20,
    group: "Музыкант",
  },
  {
    name: "Петр Петров",
    age: 28,
    group: "Онлайн",
  },
  {
    name: "Александр Сидоревич",
    age: 30,
    group: "Спорт",
  },
  {
    name: "Андрей Неврода",
    age: 25,
    group: "Работа",
  },
  {
    name: "Павел Долженко",
    age: 40,
    role: "Администратор",
  },
];

const logPerson = (user: Person): void => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);
