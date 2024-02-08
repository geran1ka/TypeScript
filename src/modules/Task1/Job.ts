export class Job {
  private role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this._salary = salary;
  }

  public get salary(): number {
    return this._salary;
  }

  public work(persoName: string): void {
    console.log(`${persoName} сейчас работает как ${this.role}`);
  }
}
