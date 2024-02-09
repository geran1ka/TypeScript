"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("./Students");
const students = new Students_1.Students();
students.add({
    id: 1,
    firstname: "Сергей",
    surname: "Лазаревв",
    age: 18,
    year: 2024,
    specialty: "Певец",
});
students.add({
    id: 2,
    firstname: "Филлип",
    surname: "Киркоров",
    age: 20,
    year: 2023,
    specialty: "Музыкант",
});
students.add({
    id: 3,
    firstname: "Андрей",
    surname: "Круз",
    age: 20,
    year: 2022,
    specialty: "Писатель",
});
students.add({
    id: 4,
    firstname: "Екатерина",
    surname: "Андреева",
    age: 21,
    year: 2021,
    specialty: "Журналист",
});
students.add({
    id: 5,
    firstname: "Василий",
    surname: "Маханенко",
    age: 22,
    year: 2020,
    specialty: "Писатель",
});
// console.log(students.get(3));
console.log(students.remove(2));
console.log(students.get(2));
console.log(students);
