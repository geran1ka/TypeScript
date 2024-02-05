const n = 10;
const s: string = n.toString();

const str = "ts";
const num1: number = +str;
const num2: number = parseInt(str);

const is: boolean = !str;
const is2: boolean = !!str;

type animal = {
  name: string;
  age: number;
  breed: string;
};

const cat = {
  name: "Стейси",
  age: 16,
  breed: "simderial cat",
} as animal;

type pet = {
  name: string;
  home: string;
  owner: {
    firstname: string;
  };
};

// const myCat: pet = {
//   ...cat,
//   home: "Малиновая",
//   owner: {
//     firstname: "Макс",
//   },
// };

// console.log("myCat: ", myCat);

const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
  name: animal.name,
  home,
  owner: {
    firstname: nameOwner,
  },
});

const myCat: pet = animalToPet(cat, "Малиновая", "Макс");
console.log("myCat: ", myCat);

interface Animal {
  name: string;
}

interface AnimalWithGenius extends Animal {
  age: number;
}

const cat2: AnimalWithGenius = {
  name: "Стайси",
  age: 16,
};

console.log(cat2);
