import { User, Users } from "./User";

interface Student extends User {
  year: number;
  specialty: string;
}

export class Students extends Users<Student> {}
