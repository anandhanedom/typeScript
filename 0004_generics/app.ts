const names: Array<string> = []; //string[]

// // names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 3000);
});

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  //instead of unknown objects
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'John Doe' }, { age: 10 });

// const mergedObj1 = merge({ name: 'John Doe' }, 30); //ERROR

mergedObj.name;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desc = 'Got no value';

  if (element.length === 1) {
    desc = 'Got 1 element.';
  } else if (element.length > 1) {
    desc = 'Got ' + element.length + ' elements';
  }
  return [element, desc];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'John' }, 'name'));
