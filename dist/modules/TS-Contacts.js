"use strict";
{
    const persons = [
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
    ];
    const logPerson = (user) => {
        console.log(`${user.name}, ${user.age}`);
    };
    console.log("Users:");
    persons.forEach(logPerson);
}