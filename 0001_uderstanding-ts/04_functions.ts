// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
function add(n1: number, n2: number) {
  return n1 + n2;
}

// function hell(): undefined {
//   return;
// }

function printRes(num: number) {
  //:void
  console.log('Result : ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

printRes(add(5, 12));

// let combineValues: Function;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printRes; //ERROR
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (res) => console.log(res));
