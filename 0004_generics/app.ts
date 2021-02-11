// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Victor' }, { age: 18 }));

// const mergedObj = merge({ name: 'Victor' }, { age: 18 });

//Equivalent --
// const mergedObj = merge<object, object>({ name: 'Victor' }, { age: 18 });

// console.log(mergedObj.name);
// console.log(mergedObj.age);

// const mergedObj = merge<object, object>({ name: 'Victor' }, 30); //ERROR

// console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));

// console.log(countAndDescribe(2)); //ERROR

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({}, 'name')); //ERROR
console.log(extractAndConvert({ name: 'Victor' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  //PRIMITVE TYPES
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1); //-1 if nothings found
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

// textStorage.addItem(10); //ERROR
textStorage.addItem('Victor');
textStorage.addItem('Navoski');
textStorage.removeItem('Navoski');

// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();

// const objectStorage = new DataStorage<object>();

// objectStorage.addItem({ name: 'Max' });
// objectStorage.addItem({ name: 'Manu' });
// //....

// objectStorage.removeItem({ name: 'Max' });

// console.log(objectStorage.getItems());

//UTILITY GENERIC TYPES - PARTIAL, READONLY, etc.
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function courseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //OPTIONAL parameter feature added here

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal; //typecasting
}

const names: Readonly<string[]> = ['Max', 'Anna'];

names.push('Victor'); //ERROR
names.pop(); //ERROR again
