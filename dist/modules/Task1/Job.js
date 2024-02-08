"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    constructor(role, salary) {
        this.role = role;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    work(persoName) {
        console.log(`${persoName} сейчас работает как ${this.role}`);
    }
}
exports.Job = Job;
