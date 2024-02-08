import { Job } from "./Job";
import { Person } from "./Person";

const engineer = new Job("engineer", 100000);
const builder = new Job("builder", 90000);
const driver = new Job("driver", 80000);
const developer = new Job("developer", 300000);

console.log(`----------------------------------------`);

const workerOne = new Person("Serg");
workerOne.work();
workerOne.job = engineer;
workerOne.work();
console.log(`ЗП у workerOne равна ${workerOne.getSalary()} руб.`);

const workerTwo = new Person("Nik", builder);
workerTwo.work();
console.log(`ЗП у workerOne равна ${workerTwo.getSalary()} руб.`);

const workerThree = new Person("Tim", driver);
workerThree.work();
console.log(`----------------------------------------`);

workerOne.job = developer;
workerOne.work();
workerTwo.job = developer;
workerTwo.work();
workerThree.job = developer;
workerThree.work();
console.log(`ЗП у workerOne равна ${workerOne.getSalary()} руб.`);
