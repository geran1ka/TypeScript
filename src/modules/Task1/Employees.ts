import { Users } from "./User";

interface Employe {
  id: number;
  firstname: string;
  surname: string;
  age: number;
  post: string;
}

export class Employees extends Users<Employe> {}
