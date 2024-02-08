import { Job } from "./Job";

export class Person {
  private _job?: Job;
  private name: string;

  constructor(name: string);
  constructor(name: string, job: Job);
  constructor(name: string, job?: Job) {
    this.name = name;
    if (job) {
      this._job = job;
    }
  }

  public set job(job: Job) {
    this._job = job;
  }

  public getSalary(): number {
    if (this._job) {
      return this._job.salary;
    }
    return 0;
  }

  public work(): void {
    this._job
      ? this._job.work(this.name)
      : console.log(`${this.name} временно безработный`);
  }
}
