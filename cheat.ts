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

type ageValues = 10 | 12;

const age: ageValues = 12;

/**
 * Type guards
 */

// 4 main ways to use type guards:

// in keyword
// typeof keyword
// instanceof keyword
// type predicates with custom type guard
