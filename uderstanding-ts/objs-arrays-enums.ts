// const person: {
//   name: string;
//   age: number;
// } = {

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[],
//   details: {
//     title: string;
//     description: string;
//   }
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //exactly 2 elements
// } = {
//   name: 'John Doe',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role.push('admin'); //an exception for push
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']; //ERROR

// person.role = [0, 'admin']; //OKAY

// let favActivities: any[];

// let favActivities: string[];

// favActivities = ['sports'];

// // console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());

//   //   console.log(hobby.map()); //ERROR!
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'John Doe',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

// let favoriteFood: any[]; avoid any's
