"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, job) {
        this.name = name;
        if (job) {
            this._job = job;
        }
    }
    set job(job) {
        this._job = job;
    }
    getSalary() {
        if (this._job) {
            return this._job.salary;
        }
        return 0;
    }
    work() {
        this._job
            ? this._job.work(this.name)
            : console.log(`${this.name} временно безработный`);
    }
}
exports.Person = Person;
