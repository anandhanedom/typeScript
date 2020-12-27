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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({ name: 'Victor' }, { age: 18 }));
var mergedObj = merge({ name: 'Victor' }, { age: 18 });
//Equivalent --
// const mergedObj = merge<object, object>({ name: 'Victor' }, { age: 18 });
// console.log(mergedObj.name);
// console.log(mergedObj.age);
// const mergedObj = merge<object, object>({ name: 'Victor' }, 30); //ERROR
console.log(mergedObj);
