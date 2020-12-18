type Combinable = number | string;

function combine(
  n1: Combinable, //   n1: number | string,
  n2: Combinable,
  resultConversion: 'as-number' | 'as-text'
) {
  let res;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    res = +n1 + +n2;
  } else {
    res = n1.toString() + n2.toString();
  }
  return res;
  //   if (resultConversion === 'as-number') {
  //     return +res;
  //   } else {
  //     return res.toString();
  //   }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('John', 'Doe', 'as-text');
console.log(combinedNames);

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };

// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
