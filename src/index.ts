enum StatusStudent {
  enrollee = "enrollee",
  student = "student",
  graduete = "graduete",
  bachelor = "bachelor",
}

abstract class Person {
  age?: number;
  protected id: string =
    Math.random().toString(32).substring(2, 6) +
    Date.now().toString().substring(9);
  protected createAt: Date = new Date();
  protected updateAt?: Date;

  constructor(name: string);
  constructor(name: string, age: number | undefined);
  constructor(public readonly name: string, age?: number | undefined) {
    if (typeof age === "number") {
      this.age = age;
    }
  }

  getInfo(): string {
    if (this.age) {
      return `${this.name}, возраст ${this.age}`;
    }

    return this.name;
  }

  abstract logger(): void;
}
class Student extends Person {
  static readonly scholl: string = "METHED";
  static count: number;
  status: StatusStudent = StatusStudent.enrollee;
  course?: string;
  _module: number = 0;

  // перегрузка конструктора
  constructor(name: string);
  constructor(name: string, course: string);
  constructor(name: string, age: number);
  constructor(name: string, course: string, age: number);
  constructor(
    public name: string,
    courseOrAge?: string | number,
    age?: number
  ) {
    let ageOrUndefined: number | undefined;

    if (typeof courseOrAge === "number") {
      ageOrUndefined = courseOrAge;
    }

    if (age) {
      ageOrUndefined = age;
    }

    super(name, ageOrUndefined);
    if (typeof courseOrAge === "string") {
      this.course = courseOrAge;
      this.changeStatus(StatusStudent.student);
    }

    Student.count++;
  }

  private changeUpdateDate(): void {
    this.updateAt = new Date();
  }

  set module(module: number) {
    this._module = module;
    this.changeUpdateDate();
  }

  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.changeUpdateDate();
  }

  // перегрузка метода
  changeInfo(course: string): void;
  changeInfo(module: number): void;
  changeInfo(course: string, module: number): void;
  changeInfo(courseOrModule: string | number, module?: number): void {
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

  static createStudents(list: string[], course: string): Student[] {
    return list.map((name) => new Student(name, course));
  }

  static createStudentFromPerson(person: Person): Student;
  static createStudentFromPerson(person: Person, course: string): Student;
  static createStudentFromPerson(person: Person, course?: string): Student {
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

  static {
    Student.count = 0;
  }

  get Info(): string {
    const info = super.getInfo();
    if (this.course) {
      return `${info}, учится на курсе ${this.course}`;
    }

    return `${info}`;
  }

  logger(): void {
    console.log(this);
  }
}

// console.log(Student.scholl);
// const students = Student.createStudents(["Иван", "Алексей", "Ринат"], "3");
// // console.log("students: ", students);

// const person1: Person = new Person("Петр", 40);
// console.log("person1: ", person1.getInfo());
// person1.changeInfo(3);

// const studentPetr: Student = Student.createStudentFromPerson(person1, "Desing");
// console.log("studentPetr: ", studentPetr);

const student2: Student = new Student("Дмитрий", "Frontend", 15);
console.log("student2: ", student2.getInfo());

// const student3: Student = new Student("Артур", 18);
// student3.changeInfo(2);

// console.log("student3: ", student3);

// const student4: Student = new Student("Геннадий", "JS", 18);
// student4.changeInfo("TS", 3);
// console.log("student4: ", student4);

// console.log(Student.count);
