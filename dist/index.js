"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduete"] = "graduete";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Person {
    constructor(name, age) {
        this.name = name;
        this.id = Math.random().toString(32).substring(2, 6) +
            Date.now().toString().substring(9);
        this.createAt = new Date();
        if (typeof age === "number") {
            this.age = age;
        }
    }
    getInfo() {
        if (this.age) {
            return `${this.name}, возраст ${this.age}`;
        }
        return this.name;
    }
}
class Student extends Person {
    constructor(name, courseOrAge, age) {
        let ageOrUndefined;
        if (typeof courseOrAge === "number") {
            ageOrUndefined = courseOrAge;
        }
        if (age) {
            ageOrUndefined = age;
        }
        super(name, ageOrUndefined);
        this.name = name;
        this.status = StatusStudent.enrollee;
        this._module = 0;
        if (typeof courseOrAge === "string") {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        Student.count++;
    }
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    set module(module) {
        this._module = module;
        this.changeUpdateDate();
    }
    changeStatus(status) {
        this.status = status;
        this.changeUpdateDate();
    }
    changeInfo(courseOrModule, module) {
        if (typeof courseOrModule === "string") {
            this.course = courseOrModule;
        }
        if (typeof courseOrModule === "number") {
            this.module = courseOrModule;
        }
        if (module) {
            this.module = module;
        }
        this.changeUpdateDate();
    }
    static createStudents(list, course) {
        return list.map((name) => new Student(name, course));
    }
    static createStudentFromPerson(person, course) {
        if (person.age) {
            if (course) {
                return new Student(person.name, course, person.age);
            }
            return new Student(person.name, person.age);
        }
        if (course) {
            return new Student(person.name, course);
        }
        return new Student(person.name);
    }
    get Info() {
        const info = super.getInfo();
        if (this.course) {
            return `${info}, учится на курсе ${this.course}`;
        }
        return `${info}`;
    }
    logger() {
        console.log(this);
    }
}
Student.scholl = "METHED";
(() => {
    Student.count = 0;
})();
// console.log(Student.scholl);
// const students = Student.createStudents(["Иван", "Алексей", "Ринат"], "3");
// // console.log("students: ", students);
// const person1: Person = new Person("Петр", 40);
// console.log("person1: ", person1.getInfo());
// person1.changeInfo(3);
// const studentPetr: Student = Student.createStudentFromPerson(person1, "Desing");
// console.log("studentPetr: ", studentPetr);
const student2 = new Student("Дмитрий", "Frontend", 15);
console.log("student2: ", student2.getInfo());
// const student3: Student = new Student("Артур", 18);
// student3.changeInfo(2);
// console.log("student3: ", student3);
// const student4: Student = new Student("Геннадий", "JS", 18);
// student4.changeInfo("TS", 3);
// console.log("student4: ", student4);
// console.log(Student.count);
