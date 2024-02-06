"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduete"] = "graduete";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Student {
    constructor(name, courseOrAge, age) {
        this.id = Math.random().toString(32).substring(2, 6) +
            Date.now().toString().substring(9);
        this.status = StatusStudent.enrollee;
        this.createAt = new Date();
        this._module = 0;
        this.name = name;
        if (typeof courseOrAge === "string") {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        if (typeof courseOrAge === "number") {
            this.age = courseOrAge;
        }
        if (age) {
            this.age = age;
        }
    }
    set module(module) {
        this._module = module;
        this.updateAt = new Date();
    }
    changeStatus(status) {
        this.status = status;
        this.updateAt = new Date();
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
        this.updateAt = new Date();
    }
}
const student1 = new Student("Петр");
student1.changeInfo(3);
console.log("student1: ", student1);
const student2 = new Student("Дмитрий", "Frontend");
student2.changeInfo("CSS");
console.log("student2: ", student2);
const student3 = new Student("Артур", 18);
student3.changeInfo(2);
console.log("student3: ", student3);
const student4 = new Student("Геннадий", "JS", 18);
student4.changeInfo("TS", 3);
console.log("student4: ", student4);
