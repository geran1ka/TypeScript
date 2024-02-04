type skill = [number, string, number];

const html: skill = [1, "html", 10];
const css: skill = [2, "css", 20];
const js: skill = [3, "js", 30];

const allSkills: skill[] = [
  [1, "html", 10],
  [2, "css", 20],
  [3, "js", 30],
];

type module = {
  index: number;
  title: string;
  hours: number;
};

type FinalProject = {
  descriptionProject: string;
  noursFinalProjects: number;
};

type ModuleWithFinalProject = module & FinalProject;

const m1: module = {
  index: 1,
  title: "Основы HTML",
  hours: 5,
};

const m2: module = {
  index: 1,
  title: "Основы Css",
  hours: 5,
};

const m3: ModuleWithFinalProject = {
  index: 1,
  title: "Основы JS",
  hours: 5,
  descriptionProject: "crm",
  noursFinalProjects: 15,
};

const course: module[] = [
  {
    index: 1,
    title: "Основы HTML",
    hours: 5,
  },
  {
    index: 1,
    title: "Основы Css",
    hours: 5,
  },
  {
    index: 1,
    title: "Основы JS",
    hours: 5,
  },
];

const course2: Array<module> = [
  {
    index: 1,
    title: "Основы HTML",
    hours: 5,
  },
  {
    index: 1,
    title: "Основы Css",
    hours: 5,
  },
  {
    index: 1,
    title: "Основы JS",
    hours: 5,
  },
];
