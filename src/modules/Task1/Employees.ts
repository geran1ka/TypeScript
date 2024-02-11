import { User, Users } from "./User";

interface Employe extends User {
  post: string;
}

export class Employees extends Users<Employe> {}
