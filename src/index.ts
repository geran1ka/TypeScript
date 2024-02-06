enum StatusStudent {
  enrollee = "enrollee",
  student = "student",
  graduete = "graduete",
  bachelor = "bachelor",
}

class Student {
  id: string =
    Math.random().toString(32).substring(2, 6) +
    Date.now().toString().substring(9);
  status: StatusStudent = StatusStudent.enrollee;
  createAt: Date = new Date();
  updateAt?: Date;
  name: string;
  course?: string;
  age?: number;
  _module: number = 0;

  // перегрузка конструктора
  constructor(name: string);
  constructor(name: string, course: string);
  constructor(name: string, age: number);
  constructor(name: string, course: string, age: number);
  constructor(name: string, courseOrAge?: string | number, age?: number) {
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

  set module(module: number) {
    this._module = module;
    this.updateAt = new Date();
  }

  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.updateAt = new Date();
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
    this.updateAt = new Date();
  }
}

const student1: Student = new Student("Петр");
student1.changeInfo(3);

console.log("student1: ", student1);

const student2: Student = new Student("Дмитрий", "Frontend");
student2.changeInfo("CSS");

console.log("student2: ", student2);

const student3: Student = new Student("Артур", 18);
student3.changeInfo(2);

console.log("student3: ", student3);

const student4: Student = new Student("Геннадий", "JS", 18);
student4.changeInfo("TS", 3);
console.log("student4: ", student4);
