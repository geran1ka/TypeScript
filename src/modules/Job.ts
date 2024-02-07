class Job {
  protected role: string;
  private salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  get Salary(): number {
    return this.salary;
  }

  public work(persoName: string): void {
    console.log(`${persoName} сейчас работает как ${this.role}`);
  }
}

const ingeneer: Job = new Job("Инженер", 100000);
console.log("ingeneer: ", ingeneer);

ingeneer.work("Роман");
console.log(ingeneer.Salary);
