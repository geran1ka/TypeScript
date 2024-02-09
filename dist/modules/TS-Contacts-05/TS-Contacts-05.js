"use strict";
const persons = [
    {
        type: "admin",
        name: "Иван Петров",
        age: 27,
        role: "Administrator",
    },
    {
        type: "user",
        name: "Марат Aляуддинов",
        age: 20,
        group: "музыкант",
    },
    {
        type: "user",
        name: "Екатерина Попова",
        age: 24,
        group: "дизайнер сайтов",
    },
    {
        type: "admin",
        name: "Аркадий Паравозов",
        age: 55,
        role: "Системный администратор",
    },
    {
        type: "user",
        name: "Даня Поперечный",
        age: 28,
        group: "Комик",
    },
    {
        type: "admin",
        name: "Олег",
        age: 44,
        role: "Модератор",
    },
];
const isAdmin = (person) => person.type === "admin";
const isUser = (person) => person.type === "user";
const logPerson = (person) => {
    let information = "";
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
// ! Фунция фильтрации задача №3
const filterUsers = (persons, criteria) => persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
});
console.log("Users of age 44:");
filterUsers(persons, {
    age: 44,
}).forEach(logPerson);
console.log("------------------------------------------------------------");
// ! Фунция фильтрации задача №4
const filterPerson = (persons, criteria) => persons.filter((person) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => person[fieldName] === criteria[fieldName]);
});
console.log("Person of age 44:");
filterPerson(persons, {
    age: 44,
}).forEach(logPerson);
// !TODO node dist/modules/TS-Contacts-05/TS-Contacts-05.js
