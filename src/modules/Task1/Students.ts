import { Users } from "./User";

interface Student {
  id: number;
  firstname: string;
  surname: string;
  age: number;
  year: number;
  specialty: string;
}

export class Students extends Users<Student> {}
