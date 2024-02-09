"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = require("./Employees");
const Students_1 = require("./Students");
const students = new Students_1.Students();
students.add({
    id: 11,
    firstname: "Сергей",
    surname: "Лазаревв",
    age: 18,
    year: 2024,
    specialty: "Певец",
});
students.add({
    id: 8,
    firstname: "Филлип",
    surname: "Киркоров",
    age: 20,
    year: 2023,
    specialty: "Музыкант",
});
students.add({
    id: 13,
    firstname: "Андрей",
    surname: "Круз",
    age: 20,
    year: 2022,
    specialty: "Писатель",
});
students.add({
    id: 113,
    firstname: "Андре",
    surname: "Круз",
    age: 20,
    year: 2021,
    specialty: "Философ",
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
    id: 9,
    firstname: "Василий",
    surname: "Маханенко",
    age: 22,
    year: 2020,
    specialty: "Писатель",
});
console.log(students);
console.log(students.remove(2));
console.log(students.get(2));
console.log(students);
console.log("--------------------------------------------------");
students.sortedName("decreasing");
console.log(students);
console.log("--------------------------------------------------");
students.sortedName();
console.log(students);
console.log("--------------------------------------------------");
const employees = new Employees_1.Employees();
employees.add({
    id: 11,
    firstname: "Михаил",
    surname: "Сорокин",
    age: 51,
    post: "Начальник ЭТЛ",
});
employees.add({
    id: 10,
    firstname: "Георгий",
    surname: "Горишний",
    age: 55,
    post: "Главный энергетик",
});
console.log(employees);
console.log(employees.get(11));
console.log(employees.remove(11));
console.log(employees);
// !TODO node dist/modules/Task1/Task1.js
