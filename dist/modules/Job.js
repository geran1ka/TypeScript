"use strict";
class Job {
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    get Salary() {
        return this.salary;
    }
    work(persoName) {
        console.log(`${persoName} сейчас работает как ${this.role}`);
    }
}
const ingeneer = new Job("Инженер", 100000);
console.log("ingeneer: ", ingeneer);
ingeneer.work("Роман");
console.log(ingeneer.Salary);
