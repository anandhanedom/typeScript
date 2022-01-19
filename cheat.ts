/**
 * Type
 */

type Animal = {
  type: string;
};

// ERROR !!!
// type Animal = {
//   age: number;
// };

// Extending animal
type Dog = Animal & {
  petName: string;
};

/**
 * Interface
 */

interface CatFamily {
  type: string;
}

interface PersianCat extends CatFamily {
  petName: string;
}

// OK HERE
interface Dogs {
  name: string;
}
interface Dogs {
  age: number;
}

const ruby: Dogs = { name: "Ruby", age: 10 };

/**
 *  Union types
 */

const garfield: CatFamily | Animal = { type: "Persian" };

type ageValues = 10 | 12; // Union of literals

const age: ageValues = 12;

const req = { url: "https://example.com", method: "GET" } as const; // Converts the entire object to be type literals

/**
 * Type guards
 */

// 4 main ways to use type guards:

// in keyword
// typeof keyword
// instanceof keyword
// type predicates with custom type guard

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

const getSmallPet = (): Bird | Fish => {
  const random = Math.floor(Math.random() * (2 - 1 + 1) + 1);

  if (random === 2) {
    return {
      fly: () => {
        console.log("flying...");
      },
    };
  } else {
    return {
      swim: () => {
        console.log("swimming...");
      },
    };
  }
};

let pet = getSmallPet();

// in
if ("fly" in pet) {
  pet.fly();
} else {
  pet.swim();
}

// ERROR!
// if ((pet as Bird).fly !== undefined) {
//   pet.fly();
// } else {
//   pet.swim();
// }

// usiing predicate

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
