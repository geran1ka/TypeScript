import { Job } from "./Job";
import { Person } from "./Person";

const engineer = new Job("engineer", 100000);
const builder = new Job("builder", 90000);
const driver = new Job("driver", 80000);

const workerOne = new Person("Serg");
workerOne.work();

const workerTwo = new Person("Nik", builder);
workerTwo.work();
const workerThree = new Person("Tim", driver);
workerThree.work();

workerOne.job = engineer;
workerOne.work();
