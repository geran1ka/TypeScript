{
  interface User {
    name: string;
    age: number;
    group: string;
  }

  interface Admin {
    name: string;
    age: number;
    role: string;
  }

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

  const Handle = (val: User | Admin): val is Admin => "role" in val;

  const logPerson = (person: Person) => {
    let information: string;
    if (Handle(person)) {
      information = person.role;
    } else {
      information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
  };

  persons.forEach(logPerson);
}
